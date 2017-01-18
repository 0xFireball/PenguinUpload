<template>
  <div class="download-item">
    <div class="md-title">File Download</div>
    <div class="download-area-padding">
      <div v-if="loading">
        <md-spinner md-stroke="1.5" md-indeterminate></md-spinner>
        <h5>Loading File Information</h5>
      </div>
      <div v-else>
        <md-icon md-theme="light-blue" class="md-primary">insert_drive_file</md-icon>
        <h5>{{ file.name }}</h5>
        <p>{{ file.sizeText }}</p>
        <div v-if="!error">
          <div class="right">
            <md-button @click="downloadFile">
              <md-icon v-if="file.pass.length > 0">lock</md-icon>
              <span>
              Download
            </span>
            </md-button>
            <!--<md-button>Copy Link</md-button>-->
          </div>
        </div>
      </div>
    </div>
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
        axios.get('/api/fileinfo/' + vm.file.id + suffix, axiosRequestConfig)
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
                let responded = true
                if (r) {
                  setTimeout(() => {
                    vm.updateFileInfo(r)
                  }, 500)
                } else {
                  vm.file.name = 'Incorrect Password'
                  vm.file.sizeText = 'Access Denied'
                  vm.loading = false
                  vm.error = true
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
  
  .download-area-padding {
    margin: 20px;
    padding: 2%;
    padding-top: 10%;
    background: #f7f7f7;
  }
</style>