<template>
  <div class="aboutWidget">
    <h5>About {{ appName }}</h5>
    <p>
      PenguinUpload is a self-hostable web application that lets users upload and share files.
    </p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        appName: 'PenguinUpload'
      }
    }
  }
</script>

<style scoped>
  .aboutWidget {
    margin: 2%;
  }
  
  h6.credit-text {
    font-weight: 300;
  }
</style>