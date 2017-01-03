<template>
  <div class="urlShrinkInput">
    <div class="container">
      <div class="row">
        <div class="eight columns offset-by-two">
          <div class="upload-here" @click="browseForFiles">
            <!--<a class="target">Drag and drop or click to upload files</a>-->
            <md-card>
              <md-card-header>
                <div class="md-title">Upload Files</div>
                <div class="md-subhead">Drag and drop or click</div>
              </md-card-header>

              <md-card-content>
                <div class="upload-area-padding">
                </div>
                <div class="upload-progress-indicator" v-if="uploading">
                  <md-spinner md-size="60" :md-progress="progressIndicator.value" class="md-warn"></md-spinner>
                  <p>{{ progressMessage }}</p>
                </div>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-fab">
                  <md-icon>cloud_upload</md-icon>
                </md-button>
              </md-card-actions>
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
    name: 'urlShrinkInput',
    data() {
      return {
        progressIndicator: {
          value: 0,
          content: ''
        },
        filesToUpload: 0
      }
    },
    computed: {
      progressMessage: function () {
        if (value < 100) {
          return `Uploading files... (${this.progressIndicator.value}%)`
        }
        return 'Upload complete!'
      },
      uploading: function () {
        return this.filesToUpload > 0
      }
    },
    methods: {
      browseForFiles: function () {
        if (!this.uploading) {
          this.$refs.browse.click()
        }
      },
      onFilesUploaded: function (e) {
        let browse = this.$refs.browse
        let fileCount = browse.files.length
        this.filesToUpload = fileCount
        if (this.uploading) {
          this.progressIndicator.content = 'Uploading files...'
          this.progressIndicator.value = 0
        }
        for (var i = 0; i < fileCount; i++) {
          var f = browse.files[i]
          var progress = addRow(f)
          this.uploadFile(f, progress)
        }
      },
      uploadFile: function (file, progress) {
        var xhr = new XMLHttpRequest()
        xhr.open("POST", "/api/upload")
        xhr.onload = function () {
          // upload complete
          console.log('upload complete')
          this.filesToUpload--
          // var response = JSON.parse(xhr.responseText)
          // progress.innerHTML = "<a href='" + response.url + "'>" + response.url + "</a>"
        }
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            this.progressIndicator.value = Math.floor((e.loaded / e.total) * 100)
          }
        }
        var form = new FormData()
        form.append("key", vm.$root.u.key)
        form.append("file", file)
        xhr.send(form)
      }
    }
  }
</script>

<style scoped>

.upload-area-padding {
  padding: 8%;
}

.upload-progress-indicator {
  text-align: center;
}

</style>