<template>
  <div class="download-item">
    <md-card>

      <md-card-header>
        <div class="md-title">File Download</div>
      </md-card-header>
      <div v-if="loading">
        <md-card-content>
          <md-spinner md-indeterminate></md-spinner>
          <h5>Loading File Information</h5>
        </md-card-content>
      </div>
      <div v-else>
        <md-card-content>
          <md-icon md-theme="light-blue" class="md-primary">insert_drive_file</md-icon>
          <h5>{{ file.name }}</h5>
          <p>{{ file.sizeText }}</p>
        </md-card-content>
        <md-card-actions v-if="!error">
          <md-button @click="downloadFile">
            <md-icon v-if="file.pass.length > 0">lock</md-icon>
            <span>
              Download
            </span>
          </md-button>
          <!--<md-button>Copy Link</md-button>-->
        </md-card-actions>
      </div>
    </md-card>
  </div>
</template>

<script>
  import axios from 'axios'
  let axiosRequestConfig = {
    validateStatus: function (status) {
      return status >= 200 && status < 500
    }
  }

  export default {
    props: ['itemId', 'itemPass'],
    data: function () {
      return {
        loading: true,
        file: {
          name: 'Loading',
          size: 'retrieving information from server',
          id: null,
          pass: ''
        },
        error: false,
        cItemPass: ''
      }
    },
    methods: {
      downloadFile: function () {
        window.location.href = '/api/download/' + this.file.id + (this.file.pass ? '!' + this.file.pass : '')
      },
      updateFileInfo: function (key) {
        let vm = this
        let suffix = key ? '!' + key : ''
        vm.file.id = vm.itemId
        axios.get('/api/fileInfo/' + vm.file.id + suffix, axiosRequestConfig)
          .then(function (response) {
            if (response.status == 200) {
              vm.file.name = response.data.name
              vm.file.sizeText = response.data.hrSize
              vm.loading = false
              if (suffix) {
                vm.file.pass = key
              }
            } else if (response.status == 401) {
              // file is password protected
              vm.$root.showPrompt('Enter password', 'File password', function (r) {
                if (r) {
                  setTimeout(() => {
                    vm.updateFileInfo(r)
                  }, 500)
                }
              })
            }
          })
          .catch(function (error) {
            console.log(error)
            // file not found
            vm.file.name = 'File Not Found'
            vm.file.sizeText = 'Error'
            vm.loading = false
            vm.error = true
          })
      }
    },
    mounted: function () {
      if (this.itemPass) {
        try {
          this.cItemPass = window.atob(this.itemPass)
        } catch (e) {
          this.cItemPass = null
        }
      }
      this.updateFileInfo(this.cItemPass)
    }
  }
</script>

<style scoped>
  .download-item {
    margin: 2%;
  }
</style>