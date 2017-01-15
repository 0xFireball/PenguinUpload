<template>
  <div class="my-files-list">
    <div class="container">
      <div class="row">
        <div class="ten columns offset-by-one">
          <div class="left sep-b">
            <md-button class="md-raised md-primary" @click="uploadMoreFiles">Upload Files</md-button>
          </div>
          <div class="uploaded-files-list">
            <div class="md-title">All My Files</div>
            <div v-if="loadFinished">
              <div v-if="noFiles">
                <p>No Files</p>
              </div>
              <md-list class="custom-list md-double-line">
                <md-list-item v-for="(file, ix) in files">
                  <md-icon class="md-primary">cloud_done</md-icon>
                  <div class="md-list-text-container">
                    <span> {{ file.name }}</span>
                    <span> {{ file.hrSize }}</span>
                  </div>
                  <md-button class="md-icon-button md-list-action" @click="lockFile(ix)" v-if="!file.locked">
                    <md-icon class="md-primary">lock_open</md-icon>
                  </md-button>
                  <md-button class="md-icon-button md-list-action" @click="unlockFile(ix)" v-else>
                    <md-icon class="md-primary">lock</md-icon>
                  </md-button>
                  <md-button class="md-icon-button md-list-action" @click="downloadFile(ix)">
                    <md-icon class="md-primary">file_download</md-icon>
                  </md-button>
                  <md-menu md-align-trigger>
                    <md-button class="md-icon-button md-list-action" md-menu-trigger>
                      <md-icon class="md-primary">more_horiz</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item @click="visitDownloadPage(ix)">Download Page</md-menu-item>
                      <md-menu-item @click="deleteFile(ix)">Delete</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                  <md-divider class="md-inset"></md-divider>
                </md-list-item>
              </md-list>
            </div>
            <div v-else>
              <md-spinner md-stroke="1.5" md-indeterminate></md-spinner>
              <h5>Retrieving Data</h5>
            </div>
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
    data() {
      return {
        files: [],
        authRequestParams: {
          params: {
            apikey: ''
          }
        },
        loadFinished: false
      }
    },
    computed: {
      filesCount: function () {
        return this.files.length
      },
      noFiles: function () {
        return this.filesCount == 0
      }
    },
    methods: {
      uploadMoreFiles: function () {
        this.$router.push('/u')
      },
      visitUrl: function (u) {
        window.open(u, '_blank')
      },
      visitDownloadPage: function (ix) {
        let f = this.files[ix]
        if (f.locked) {
          let vm = this
          vm.$root.showConfirm(
            `
This file is password protected. Do you want to encode the <br>
password in the link? If you don't do this, anyone who visits <br>
your link will need to enter the file password to view the file.
`,
            'Include password?',
            function (r) {
              if (r) {
                // include password
                setTimeout(function () {
                  vm.showDownloadLinkWithPass(ix)
                }, 400)
              } else {
                // just go to link
                let dlPage = '/#/d/' + f.fileId
                window.open(dlPage, '_blank')
              }
            }, 'Yes', 'No')
        } else {
          // just open the page
          let dlPage = '/#/d/' + f.fileId
          window.open(dlPage, '_blank')
        }
      },
      showDownloadLinkWithPass: function (ix) {
        let vm = this
        let f = vm.files[ix]
        axios.get('/api/getpass/' + f.fileId, vm.authRequestParams)
          .then(function (res) {
            // password should be returned
            let dlPage = window.location.href.split("#")[0] + '#/d/' + f.fileId + '/' + window.btoa(res.data)
            vm.$root.showPopup(
              `
Download link with password encoded:<br>
<a target="_blank" href="${dlPage}">${dlPage}</a>
            `,
              'Link Created')
          })
      },
      downloadFile: function (ix) {
        let f = this.files[ix]
        // use force download to bypass password
        window.location.href = '/api/fdownload/' + f.fileId + '?apikey=' + this.$root.u.key
      },
      lockFile: function (ix) {
        let vm = this
        let f = vm.files[ix]
        vm.$root.showPrompt('Enter password', 'Password', function (r) {
          if (r) {
            // send lock request
            axios.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.authRequestParams)
              .then(function (res) {
                // update file list
                f.locked = true
              })
          }
        })
      },
      unlockFile: function (ix) {
        let vm = this
        let f = vm.files[ix]
        vm.$root.showConfirm('Are you sure you want to remove the password on this file?', 'Confirm Unlock', (r) => {
          if (r) {
            // send unlock request
            axios.patch('/api/unlock/' + f.fileId, {}, vm.authRequestParams)
              .then(function (res) {
                // update file list
                f.locked = false
              })
          }
        })
      },
      deleteFile: function (ix) {
        let vm = this
        let f = vm.files[ix]
        vm.$root.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete',
          (r) => {
            if (r) {
              // send delete request
              axios.delete('/api/delete/' + f.fileId, vm.authRequestParams)
                .then(function (res) {
                  // update file list
                  vm.files.splice(ix, 1)
                })
            }
          })
      }
    },
    mounted: function () {
      // load files from server
      let vm = this
      vm.authRequestParams.params.apikey = vm.$root.u.key
      axios.get('/api/userfiles', vm.authRequestParams)
        .then(function (response) {
          // merge file list
          for (let i = 0; i < response.data.length; i++) {
            vm.files.push(response.data[i])
          }
          vm.loadFinished = true
        })
        .catch(function (error) {
          // console.log(error)
          vm.loadFinished = true
        })
    }
  }
</script>
<style scoped>

</style>