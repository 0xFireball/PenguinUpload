<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <intro></intro>
    <urlShrinkInput></urlShrinkInput>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/Intro'
  import urlShrinkInput from '../components/urlShrinkInput'
  import devCredits from '../components/devCredits'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      urlShrinkInput,
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