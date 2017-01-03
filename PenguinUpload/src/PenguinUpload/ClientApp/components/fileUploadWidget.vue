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

      <md-dialog-alert :md-content-html="completedAlert.content" :md-ok-text="completedAlert.ok" ref="completedDialog">
      </md-dialog-alert>
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
        completedAlert: {
          content: '.',
          ok: 'Cool'
        }
      }
    },
    methods: {
      browseForFiles: function () {
        this.$refs.browse.click()
      },
      onFilesUploaded: function (e) {
        let browse = this.$refs.browse
        for (var i = 0; i < browse.files.length; i++) {
          var f = browse.files[i];
          var progress = addRow(f);
          this.uploadFile(f, progress);
        }
      },
      uploadFile: function (file, progress) {
        var bar = progress.querySelector(".progress-bar");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/upload");
        xhr.onload = function () {
          var response = JSON.parse(xhr.responseText);
          progress.innerHTML = "<a href='" + response.url + "'>" + response.url + "</a>";
        };
        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            var progress = Math.floor((e.loaded / e.total) * 100);
            bar.style.width = progress + "%";
            bar.textContent = progress + "%";
          }
        };
        var form = new FormData();
        form.append("key", window.api_key);
        form.append("file", file);
        xhr.send(form);
      }
    }
  }
</script>

<style scoped>

.upload-area-padding {
  padding: 8%;
}

</style>