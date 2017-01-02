<template>
  <div class="urlShrinkInput">
    <div class="container">
      <div class="row">
        <div class="eight columns offset-by-two">
          <h4>Upload Files</h4>
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
  data () {
    return {
      completedAlert: {
        content: '.',
        ok: 'Cool'
      }
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>