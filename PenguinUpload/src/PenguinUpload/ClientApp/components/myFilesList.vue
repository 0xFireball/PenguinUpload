<template>
  <div class="my-files-list">
    <div class="container">
      <div class="row">
        <div class="eight columns offset-by-two">
          <div class="left sep-b">
            <md-button class="md-raised md-primary" @click="uploadMoreFiles">Upload Files</md-button>
          </div>
          <div class="uploaded-files-list">
            <md-card>
              <md-card-header>
                <div class="md-title">All My Files</div>
              </md-card-header>

              <md-card-content>
                <md-list class="custom-list md-double-line">
                  <md-list-item v-for="(file, ix) in files">
                    <md-icon class="md-primary">cloud_done</md-icon>

                    <div class="md-list-text-container">
                      <span> {{ file.name }}</span>
                      <span> {{ file.sizeText }}</span>
                    </div>
                    <md-menu md-align-trigger>
                      <md-button class="md-icon-button md-list-action" md-menu-trigger>
                        <md-icon class="md-primary">more_horiz</md-icon>
                      </md-button>
                      <md-menu-content>
                        <md-menu-item @click="deleteFile(ix)">Delete</md-menu-item>
                      </md-menu-content>
                    </md-menu>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>
                </md-list>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>
    <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.content" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel"
      @close="onConfirmClose" ref="confirmDialog">
    </md-dialog-confirm>
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
        confirm: {
          title: ' ',
          content: ' ',
          ok: 'OK',
          cancel: 'Cancel',
          callback: null
        },
        // files: []
        files: [
          {
            name: 'Fahrenheit 451',
            sizeText: 'OVER 9000'
          }
        ]
      }
    },
    methods: {
      uploadMoreFiles: function () {
        this.$router.push('/u')
      },
      visitUrl: function (u) {
        window.open(u, '_blank')
      },
      deleteFile: function (ix) {
        this.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete', (r) => {
          if (r) {
            // send delete request
            // axios.post('')
          }
        })
      },
      showConfirm: function (content, title, cb) {
        this.confirm.content = content
        this.confirm.title = title
        this.confirm.callback = cb
        this.$refs.confirmDialog.open()
      },
      onConfirmClose: function (result) {
        this.confirm.callback(result == 'ok')
        this.confirm.callback = null
      }
    }
  }
</script>

<style scoped>

</style>