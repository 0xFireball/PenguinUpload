<template>
  <div class="file-upload-widget">
    <div class="container">
      <v-layout row>
        <v-flex xs12 lg10 offset-lg1>
          <div>
            <v-btn primary @click.native="viewMyFiles">View my files</v-btn>
          </div>
          <div class="center">
            <div class="upload-here" @drop.stop.prevent="handleDragDropUpload" @dragenter.stop.prevent @dragleave.stop.prevent @dragover.stop.prevent>
              <!--<a class="target">Drag and drop or click to upload files</a>-->
              <h5>Upload Files</h5>
              <v-layout class="upload-settings-section" row>
                <v-flex xs10 offset-xs1 md6 offset-md3>
                  <v-text-field
                    label="Upload Destination"
                    v-model="uploadDestination"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <p>Drag and drop or click</p>
              <div class="upload-area-padding" @click="browseForFiles">
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
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
        progressIndicators: [],
        /* schema:
        {
          value: number [0-100],
          fileRef: object [reference to file that is uploading],
          name: string [name of file],
          xhr: object [xhr object reference],
          error: bool
          message: string or null [an error message]
        }
        */
        completedFiles: [],
        /* schema:
         */
        uploadDestination: '/'
      }
    },
    computed: {
      uploadingFiles: function () {
        return this.progressIndicators.length
      },
      uploading: function () {
        return this.uploadingFiles > 0
      }
    },
    methods: {
      viewMyFiles: function () {
        this.$router.push('/f')
      },
      browseForFiles: function () {
        this.$refs.browse.click()
      },
      onFilesUploaded: function (e) {
        let browse = this.$refs.browse
        let fileCount = browse.files.length
        for (let i = 0; i < fileCount; i++) {
          let f = browse.files[i]
          let progress = {
            value: 0,
            fileRef: f,
            name: f.name
          }
          this.progressIndicators.push(progress)
          this.uploadFile(f, progress)
        }
      },
      handleDragDropUpload: function (e) {
        for (var i = 0; i < e.dataTransfer.files.length; i++) {
          var f = e.dataTransfer.files[i];
          let progress = {
            value: 0,
            fileRef: f,
            name: f.name,
            error: false,
            message: ''
          }
          this.progressIndicators.push(progress)
          this.uploadFile(f, progress)
        }
      },
      cancelUpload: function (progress) {
        let vm = this
        progress.xhr.abort()
        vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)
      },
      uploadFile: function (file, progress) {
        let vm = this
        let xhr = new XMLHttpRequest()
        progress.xhr = xhr
        xhr.open("POST", "/api/upload")
        xhr.onload = function () {
          if (xhr.status === 200) {
            // upload complete
            // console.log('upload complete', progress.name)
            // dequeue the uploading file
            vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1)
            // console.log(xhr.responseText)
            let response = JSON.parse(xhr.responseText)
            vm.completedFiles.push({
              name: progress.name,
              downloadPage: '/#/d/' + response.fileId
              // downloadPage: response.downloadPage // get download page from server response
            })
          } else {
            // update progress indicator
            progress.error = true
            // progress.message = xhr.responseText
            // reactive update
            vm.$set(progress, 'message', xhr.responseText)
          }
        }
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            progress.value = Math.floor((e.loaded / e.total) * 100)
          }
        }
        let form = new FormData()
        form.append("apikey", vm.$root.u.key)
        form.append("dir", vm.uploadDestination)
        form.append("file", file)
        xhr.send(form)
      },
      visitUrl: function (u) {
        window.open(u, '_blank')
      }
    }
  }
</script>
<style scoped>
  .upload-area-padding {
    margin: 20px;
    padding: 14%;
    background: #f7f7f7;
  }
  
  .upload-progress-indicators {
    text-align: center;
  }
  
  .upload-progress-bar {
    padding: 5px;
  }
  
  .upload-settings-section {
    text-align: center;
  }
</style>