<template>
  <div class="file-upload-widget">
    <div class="container">
      <div class="row">
        <div class="ten columns offset-by-one">
          <div class="left sep-b">
            <md-button class="md-raised md-primary" @click="viewMyFiles">View all my files</md-button>
          </div>
          <div class="upload-here" @drop.stop.prevent="handleDragDropUpload" @dragenter.stop.prevent @dragleave.stop.prevent @dragover.stop.prevent>
            <!--<a class="target">Drag and drop or click to upload files</a>-->
            <md-card>
              <md-card-header>
                <div class="md-title">Upload Files</div>
                <div class="md-subhead">Drag and drop or click</div>
              </md-card-header>
              <div class="upload-area-padding" @click="browseForFiles">
              </div>
              <md-card-actions>
                <md-button class="md-fab" @click="browseForFiles">
                  <md-icon>cloud_upload</md-icon>
                </md-button>
              </md-card-actions>
              <md-card-content>
                <div class="upload-progress-indicators">
                  <!--<md-spinner md-size="60" :md-progress="progressIndicator.value" class="md-warn"></md-spinner>
                  <p>{{ progressMessage }}</p>-->
                  <md-list class="custom-list md-double-line">
                    <!--Uploading file-->
                    <md-subheader v-if="progressIndicators.length > 0">Uploading</md-subheader>
                    <md-list-item v-for="(prInd, ix) in progressIndicators">
                      <md-icon class="md-primary" v-if="prInd.error == null">cloud_queue</md-icon>
                      <md-icon class="md-primary" v-else>error</md-icon>

                      <div class="md-list-text-container">
                        <template v-if="prInd.error == null">
                          <span> {{ prInd.name }}</span>
                          <span> {{ (prInd.value < 100) ? `Uploading... (${prInd.value}%)` : 'Uploaded, Processing...' }}</span>
                        </template>
                        <template v-else>
                          <span> {{ prInd.name }} </span>
                          <span> {{ 'Upload error: '+ prInd.error }}</span>
                        </template>
                      </div>

                      <md-button class="md-icon-button md-list-action" @click="cancelUpload(prInd)">
                        <md-icon class="md-primary">cancel</md-icon>
                      </md-button>

                      <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">file_upload</md-icon>
                      </md-button>

                      <md-divider class="md-inset"></md-divider>
                    </md-list-item>

                    <!--Upload completed files-->
                    <md-subheader v-if="completedFiles.length > 0">Completed</md-subheader>
                    <md-list-item v-for="(cmplFile, ix) in completedFiles" @click="visitUrl(cmplFile.downloadPage)">
                      <md-icon class="md-primary">cloud_done</md-icon>

                      <div class="md-list-text-container">
                        <span> {{ cmplFile.name }}</span>
                        <span>Upload Complete!</span>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">done</md-icon>
                      </md-button>

                      <md-divider class="md-inset"></md-divider>
                    </md-list-item>
                  </md-list>
                  <md-button v-if="completedFiles.length > 0" @click="completedFiles = []">Clear All</md-button>
                </div>
              </md-card-content>
            </md-card>
            <input type="file" class="invisible" ref="browse" @change="onFilesUploaded" multiple />
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
        progressIndicators: [],
        /* schema:
        {
          value: number [0-100],
          fileRef: object [reference to file that is uploading],
          name: string [name of file],
          xhr: object [xhr object reference],
          error: string or null [an error message]
        }
        */
        completedFiles: []
        /* schema:
        */
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
        this.$router.push('/files')
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
            error: null
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
            progress.error = xhr.responseText
            console.log(progress)
          }
        }
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            progress.value = Math.floor((e.loaded / e.total) * 100)
          }
        }
        let form = new FormData()
        form.append("apikey", vm.$root.u.key)
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
  padding: 8%;
}

.upload-progress-indicators {
  text-align: center;
}

</style>