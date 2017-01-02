<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <intro></intro>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import devCredits from '../components/devCredits'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
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