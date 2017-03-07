<template>
  <div class="stats-layout">
    <intro></intro>
    <statsViewer></statsViewer>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import statsViewer from '../components/statistics/statsViewer'
  import devCredits from '../components/devCredits'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      statsViewer,
      devCredits
    }
  }
</script>

<style scoped>
  .stats-layout {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>