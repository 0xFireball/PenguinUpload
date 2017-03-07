<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <div class="row download-area">
      <div class="twelve columns">
        <intro></intro>
      </div>
    </div>
    <div class="row">
      <div class="six columns offset-by-three">
        <downloadItem :itemId="$route.params.id" :itemPass="$route.params.pass"></downloadItem>
      </div>
    </div>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import devCredits from '../components/devCredits'
  import downloadItem from '../components/downloadItem'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      downloadItem,
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
  }

  .download-area {
    margin-bottom: 2%;
  }
</style>