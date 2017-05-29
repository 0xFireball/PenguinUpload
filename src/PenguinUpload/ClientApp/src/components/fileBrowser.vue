<template>
  <div class="file-browser">
    <div class="t-left">
      <v-btn primary @click.native="uploadMoreFiles">Upload Files</v-btn>
    </div>
    <div class="uploaded-files-list">
      <h6 class="center">All My Files</h6>
      <div v-if="loadFinished">
        <div v-if="error">
          <p>Error</p>
        </div>
        <div v-else-if="noItems">
          <p>No Files</p>
        </div>
        <v-list two-line subheader>
          <!--directories-->
          <v-list-item v-if="!atRootDir" @click.native="dirUpLevel()">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon>folder</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> .. </v-list-tile-title>
                <v-list-tile-sub-title>Parent Folder</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-divider inset />
          <v-list-item :key="ix" v-for="(dir, ix) in dirs" @click.native="openDir(ix)">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon primary>folder</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ dir.name }}</v-list-tile-title>
                <v-list-tile-sub-title>Folder</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
          </v-list-item>
          <!-- files -->
          <v-list-item :key="ix" v-for="(file, ix) in files" @click.native="openDir(ix)">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon primary>cloud_done</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ file.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ humanFileSize(file.size) }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="!file.locked">
                <v-btn icon ripple @click.native="lockFile(ix)">
                  <v-icon>lock_open</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action v-else>
                <v-btn icon ripple @click.native="unlockFile(ix)">
                  <v-icon>lock</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn icon ripple @click.native="downloadFile(ix)">
                  <v-icon>file_download</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-menu
                  origin="center center"
                  transition="v-scale-transition"
                  bottom
                >
                  <!-- -->
                  <v-btn icon ripple slot="activator">
                    <v-icon>more_horiz</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile @click.native="visitDownloadPage(ix)">
                        <v-list-tile-title>Download Page</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile @click.native="renameFile(ix)">
                        <v-list-tile-title>Rename</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile @click.native="deleteFile(ix)">
                        <v-list-tile-title>Delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider inset></v-divider>
          </v-list-item>
        </v-list>
      </div>
      <div class="center" v-else>
        <v-progress-circular indeterminate v-bind:size="60" class="primary--text"></v-progress-circular>
        <h5>Retrieving Data</h5>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import HumanFilesizeMixin from '../mixins/util/filesize.js'

let axiosRequestConfig = {
  validateStatus (status) {
    return status >= 200 && status < 500
  }
}

export default {
  name: 'fileBrowser',
  props: ['dir'],
  mixins: [ HumanFilesizeMixin ],
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
    noItems () {
      return this.files.length == 0 && this.dirs.length == 0
    },
    atRootDir () {
      return this.currentDir === '/'
    },
    currentDirStructure () {
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
          return null
        }
      }
      return workingDirStructure
    }
  },
  methods: {
    getAuthRequestParams () {
      return {
        params: {
          apikey: this.$store.getters.auth_data.key
        }
      }
    },
    uploadMoreFiles () {
      this.$router.push('/d')
    },
    visitUrl (u) {
      window.open(u, '_blank')
    },
    visitDownloadPage (ix) {
      let f = this.files[ix]
      //         if (f.locked) {
      //           let vm = this
      //           vm.$root.showConfirm(
      //             `
      // This file is password protected. Do you want to encode the <br>
      // password in the link? If you don't do this, anyone who visits <br>
      // your link will need to enter the file password to view the file.
      // `,
      //             'Include password?',
      //             function (r) {
      //               if (r) {
      //                 // include password
      //                 setTimeout(function () {
      //                   vm.showDownloadLinkWithPass(ix)
      //                 }, 400)
      //               } else {
      //                 // just go to link
      //                 let dlPage = '/#/d/' + f.fileId
      //                 window.open(dlPage, '_blank')
      //               }
      //             }, 'Yes', 'No')
      //         } else {
      // just open the page
      let dlPage = '/#/d/' + f.fileId
      window.open(dlPage, '_blank')
      // }
    },
    //       showDownloadLinkWithPass (ix) {
    //         let vm = this
    //         let f = vm.files[ix]
    //         axios.get('/api/getpass/' + f.fileId, vm.getAuthRequestParams())
    //           .then(function (res) {
    //             // password should be returned
    //             let dlPage = window.location.href.split("#")[0] + '#/d/' + f.fileId + '/' + window.btoa(res.data)
    //             vm.$root.showPopup(
    //               `
    // Download link with password encoded:<br>
    // <a target="_blank" href="${dlPage}">${dlPage}</a>
    //             `,
    //               'Link Created')
    //           })
    //       },
    downloadFile (ix) {
      let f = this.files[ix]
      // use force download to bypass password
      window.location.href = '/api/fdownload/' + f.fileId + '?apikey=' + this.$store.getters.auth_data.key
    },
    lockFile (ix) {
      let vm = this
      let f = vm.files[ix]
      vm.$root.showPrompt('Enter password', 'Password', function (r) {
        if (r) {
          // send lock request
          axios.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.getAuthRequestParams())
            .then(function (res) {
              // update file list
              f.locked = true
            })
        }
      })
    },
    unlockFile (ix) {
      let vm = this
      let f = vm.files[ix]
      vm.$root.showConfirm('Are you sure you want to remove the password on this file?', 'Confirm Unlock', (r) => {
        if (r) {
          // send unlock request
          axios.patch('/api/unlock/' + f.fileId, {}, vm.getAuthRequestParams())
            .then(function (res) {
              // update file list
              f.locked = false
            })
        }
      })
    },
    renameFile (ix) {
      let vm = this
      let f = vm.files[ix]
      vm.$root.showPrompt('Enter new name', 'File name',
        (r) => {
          if (r) {
            // send rename request
            axios.patch('/api/rename/' + f.fileId + '/' + r, {}, vm.getAuthRequestParams())
              .then(function (res) {
                // update file list
                f.name = r
              })
          }
        })
    },
    deleteFile (ix) {
      let vm = this
      let f = vm.files[ix]
      vm.$root.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete',
        (r) => {
          if (r) {
            // send delete request
            axios.delete('/api/delete/' + f.fileId, vm.getAuthRequestParams())
              .then(function (res) {
                // update file list
                vm.files.splice(ix, 1)
                vm.currentDirStructure.files.splice(ix, 1)
                // propagate to directories
                if (vm.noItems) { // if current dir is empty
                  // remove current dir and switch to parent dir
                  vm.dirStructure.dirs = vm.dirStructure.dirs.filter(d => d.name !== vm.currentDirStructure.name)
                  vm.dirUpLevel()
                }
              })
          }
        })
    },
    openDir (ix) {
      let newDirPath = this.dirs[ix].path
      this.navigateToDir(newDirPath)
    },
    dirUpLevel () {
      if (!this.atRootDir) {
        let segments = this.currentDir.split('/')
        segments = segments.filter(Boolean)
        segments.pop()
        let newDirPath = '/' + segments.join('/')
        this.navigateToDir(newDirPath)
      }
    },
    navigateToDir (path) {
      this.$router.push('/files' + path)
    },
    updateFilesDirs () {
      let workingDirStructure = this.currentDirStructure
      if (!workingDirStructure) return
      // now update collections
      this.files = workingDirStructure.files
      this.dirs = workingDirStructure.dirs
    },
    fetchData () {
      // load directory structure from server
      let vm = this
      vm.currentDir = vm.currentDir || '/'
      // console.log(vm.dir)
      vm.getAuthRequestParams()
      axios.get('/api/files', vm.getAuthRequestParams())
        .then(function (response) {
          // merge file list
          // console.log(response.data)
          vm.dirStructure = response.data
          vm.updateFilesDirs()
          vm.loadFinished = true
        })
        .catch(function (error) {
          if (error) {
            // console.log(error)
            vm.error = true
          }
          vm.loadFinished = true
        })
    },
    handleGlobalKeypress (e) {
      e = e || window.event
      if (e) {
        switch (e.keyCode) {
          case 37:
            // left
            this.$router.go(-1)
            break
          case 38:
            // up
            this.dirUpLevel()
            break
          case 39:
            // right
            this.$router.go(1)
            break
          case 40:
            // down
            break
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      // update current directory
      if (!this.dirStructure) {
        this.fetchData()
      }
      this.currentDir = '/' + (to.params.dir || '')
      // this will update structure
      this.updateFilesDirs()
    }
  },
  mounted () {
    this.fetchData()
    document.onkeydown = this.handleGlobalKeypress
  }
}
</script>
<style scoped>

</style>