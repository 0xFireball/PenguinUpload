<template>
  <div class="download-file">
    <h4 class="center">File Download</h4>
    <div class="download-area-container">
      <div class="center" v-if="loading">
        <v-progress-circular indeterminate v-bind:size="60" class="primary--text"></v-progress-circular>
        <h5>Loading File Information</h5>
      </div>
      <div v-else>
        <div class="center">
          <v-icon>insert_drive_file</v-icon>
          <h5>{{ file.name }}</h5>
          <p>{{ file.sizeText }}</p>
          <div v-if="!error">
            <div class="right">
                <md-button @click.native="downloadFile">
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
  </div>
</template>
<script>

import axios from 'axios'
import HumanFilesizeMixin from '../mixins/util/filesize.js'

let axiosRequestConfig = {
  validateStatus: function (status) {
    return status >= 200 && status < 500
  }
}

export default {
  name: 'downloadFile',
  props: ['itemId', 'itemPass'],
  mixins: [ HumanFilesizeMixin ],
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
          if (response.status === 200) {
            vm.file.name = response.data.name
            vm.file.sizeText = this.humanFileSize(response.data.size)
            vm.loading = false
            if (suffix) {
              vm.file.pass = key
            }
          } else if (response.status === 401) {
            // file is password protected
            vm.$root.showPrompt('Enter password', 'File password', function (r) {
              // let responded = true
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
          } else if (response.status === 404) {
            vm.file.name = 'File not Found'
            vm.file.sizeText = 'Not found'
            vm.loading = false
            vm.error = true
          }
        })
        .catch(function (error) {
          console.log(error)
          vm.file.name = 'Error locating file'
          vm.file.sizeText = 'Could not retrieve information'
          vm.loading = false
          vm.error = true
        })
    },
    handleGlobalKeypress: function (e) {
      e = e || window.event
      if (e) {
        switch (e.keyCode) {
          case 40:
            // down
            this.downloadFile()
            break
        }
      }
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
    document.onkeydown = this.handleGlobalKeypress
  }
}
</script>

<style scoped>  
.download-area-container {
  margin: 20px;
  padding: 2%;
  padding-top: 10%;
  background: #f7f7f7;
}
</style>