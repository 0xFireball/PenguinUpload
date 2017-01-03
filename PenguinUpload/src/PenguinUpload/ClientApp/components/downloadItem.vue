<template>
  <div class="download-item">
    <md-card>

      <md-card-header>
        <div class="md-title">{{ file.name }}</div>
        <div class="md-subhead">{{ file.size }}</div>
      </md-card-header>
      <div v-if="loading">
        <md-card-content>
          <md-spinner md-indeterminate></md-spinner>
          <h5>Loading File Information</h5>
        </md-card-content>
      </div>
      <div v-else>
        <md-card-content>
          <md-spinner md-indeterminate></md-spinner>
          <h5>Loading File Information</h5>
        </md-card-content>
        <md-card-actions>
          <md-button>Download</md-button>
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
          id: null
        }
      }
    },
    mounted: function () {
      this.file.id = this.itemId
      axios.get('/api/fileInfo/' + this.file.id)
        .then(function (response) {
          this.file.name = response.data.name
          this.file.sizeText = ''
        })
        .catch(function (error) {
          if (error) {
            // file not found
            this.file.name = 'File Not Found'
            this.file.sizeText = 'Error'
          }
        })
    }
  }
</script>

<style scoped>
  .download-item {
    margin: 2%;
  }
</style>