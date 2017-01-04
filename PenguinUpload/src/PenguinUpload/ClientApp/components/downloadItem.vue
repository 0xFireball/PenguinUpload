<template>
  <div class="download-item">
    <md-card>

      <md-card-header>
        <div class="md-title">File Download</div>
      </md-card-header>
      <div v-if="loading">
        <md-card-content>
          <md-spinner md-indeterminate></md-spinner>
          <h5>Loading File Information</h5>
        </md-card-content>
      </div>
      <div v-else>
        <md-card-content>
          <md-icon md-theme="light-blue" class="md-primary">insert_drive_file</md-icon>
          <h5>{{ file.name }}</h5>
          <p>{{ file.sizeText }}</p>
        </md-card-content>
        <md-card-actions v-if="!error">
          <md-button @click="downloadFile">Download</md-button>
          <!--<md-button>Copy Link</md-button>-->
        </md-card-actions>
      </div>
    </md-card>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['itemId'],
    data: function () {
      return {
        loading: true,
        file: {
          name: 'Loading',
          size: 'retrieving information from server',
          id: null,
        },
        error: false
      }
    },
    methods: {
      downloadFile: function () {
        window.location.href = '/api/download/' + this.file.id
      },
      updateFileInfo: function () {
        let vm = this
        vm.file.id = vm.itemId
        axios.get('/api/fileInfo/' + vm.file.id)
          .then(function (response) {
            vm.file.name = response.data.name
            vm.file.sizeText = response.data.hrSize
            vm.loading = false
          })
          .catch(function (error) {
            console.log(error)
            // file not found
            vm.file.name = 'File Not Found'
            vm.file.sizeText = 'Error'
            vm.loading = false
            vm.error = true
          })
      }
    },
    mounted: function () {
      this.updateFileInfo()
    }
  }
</script>

<style scoped>
  .download-item {
    margin: 2%;
  }
</style>