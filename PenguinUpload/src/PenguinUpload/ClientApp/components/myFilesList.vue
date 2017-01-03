<template>
  <div class="my-files-list">
    <div class="container">
      <div class="row">
        <div class="eight columns offset-by-two">
          <div class="left sep-b">
            <md-button class="md-raised md-primary" @click="uploadMoreFiles">Upload Files</md-button>
          </div>
          <div class="uploaded-files-list">
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
          name: string [name of file]
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
      uploadMoreFiles: function () {
        this.$router.push('/u')
      },
      visitUrl: function (u) {
        window.open(u, '_blank')
      }
    }
  }
</script>

<style scoped>

</style>