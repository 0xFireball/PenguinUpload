<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <intro></intro>
    <fileUploadWidget></fileUploadWidget>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import fileUploadWidget from '../components/fileUploadWidget'
  import devCredits from '../components/devCredits'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      fileUploadWidget,
      devCredits
    }
  }
</script>

<style scoped>
  .shrink-layout {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>