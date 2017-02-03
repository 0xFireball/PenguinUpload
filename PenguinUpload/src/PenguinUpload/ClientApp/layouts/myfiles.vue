<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <intro view-title="My Files"></intro>
    <myFilesList :dir="dir"></myFilesList>
    <devCredits></devCredits>
  </div>
</template>
<script>
  import Intro from '../components/intro'
  import myFilesList from '../components/myFilesList'
  import devCredits from '../components/devCredits'

  export default {
    props: ['dir'],
    data: function () {
      return {}
    },
    components: {
      Intro,
      myFilesList,
      devCredits
    },
    beforeRouteEnter: function (to, from, next) {
      next(vm => {
        if (!vm.$root.loggedIn) {
          vm.$router.replace('/')
        }
      })
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
</style>