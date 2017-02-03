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
              <div v-if="error">
                <p>Error</p>
              </div>
              <div v-else-if="noItems">
                <p>No Files</p>
              </div>
              <md-list class="custom-list md-double-line">
                <!--directories-->
                <div v-if="!atRootDir">
                </div>
                <md-list-item v-for="(dir, ix) in dirs" @click="openDir(ix)">
                  <md-icon class="md-primary">folder</md-icon>
                  <div class="md-list-text-container">
                    <span> {{ dir.name }}</span>
                    <span> Folder </span>
                  </div>
                  <md-menu md-align-trigger>
                    <md-button class="md-icon-button md-list-action" md-menu-trigger>
                      <md-icon class="md-primary">more_horiz</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item @click="openDir(ix)">Open</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                  <md-divider class="md-inset"></md-divider>
                </md-list-item>
                <!--files-->
                <md-list-item v-for="(file, ix) in files">
                  <md-icon class="md-primary">cloud_done</md-icon>
                  <div class="md-list-text-container">
                    <span> {{ file.name }}</span>
                    <span> {{ getHrSize(file.size) }}</span>
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
              <md-spinner :md-stroke="1.5" md-indeterminate></md-spinner>
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
    props: ['dir'],
    data() {
      return {
        dirStructure: {},
        files: [],
        dirs: [],
        loadFinished: false,
        error: false,
        currentDir: this.dir
      }
    },
    computed: {
      noItems: function () {
        return this.files.length == 0 && this.dirs.length == 0
      },
      atRootDir: function () {
        return this.currentDir === '/'
      }
    },
    methods: {
      getHrSize: function (l) {
        return this.$root.humanFileSize(l)
      },
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
        axios.get('/api/getpass/' + f.fileId, vm.$root.getAuthRequestParams())
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
            axios.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.$root.getAuthRequestParams())
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
            axios.patch('/api/unlock/' + f.fileId, {}, vm.$root.getAuthRequestParams())
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
              axios.delete('/api/delete/' + f.fileId, vm.$root.getAuthRequestParams())
                .then(function (res) {
                  // update file list
                  vm.files.splice(ix, 1)
                })
            }
          })
      },
      openDir: function (ix) {
        let newDirPath = this.dirs[ix].path
        this.$router.push('/files' + newDirPath)
      },
      updateFilesDirs: function () {
        // walk directory structure
        let segments = this.currentDir.split('/')
        // clean up
        segments = segments.filter(Boolean)
        // find matching directory
        let workingDirStructure = this.dirStructure
        for (let i = 0; i < segments.length; i++) {
          let currentSegment = segments[i]
          workingDirStructure = workingDirStructure.dirs.find(d => d.name === currentSegment)
          if (!workingDirStructure) {
            this.error = true
            return
          }
        }
        // now update collections
        this.files = workingDirStructure.files
        this.dirs = workingDirStructure.dirs
      },
      fetchData: function () {
        // load directory structure from server
        let vm = this
        vm.currentDir = vm.currentDir || '/'
        console.log(vm.dir)
        vm.$root.getAuthRequestParams()
        axios.get('/api/files', vm.$root.getAuthRequestParams())
          .then(function (response) {
            // merge file list
            console.log(response.data)
            vm.dirStructure = response.data
            vm.updateFilesDirs()
            vm.loadFinished = true
          })
          .catch(function (error) {
            if (error) {
              console.log(error)
              vm.error = true
            }
            vm.loadFinished = true
          })
      }
    },
    watch: {
      '$route' (to, from) {
        // update current directory
        if (!this.dirStructure) {
          this.fetchData()
        }
        this.currentDir = '/' + (to.params.dir || '')
        this.updateFilesDirs()
      }
    },
    mounted: function () {
      this.fetchData()
    }
  }
</script>
<style scoped>

</style>