<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <div class="row intro-area">
        <div class="twelve columns">
          <intro></intro>
        </div>
      </div>
      <div class="row">
        <div class="six columns offset-by-three">
          <login></login>
        </div>
      </div>
    <devCredits></devCredits>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import devCredits from '../components/devCredits'
  import Login from '../components/login'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      Login,
      devCredits
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (vm.$root.loggedIn) {
          vm.$router.replace('/u')
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
    margin-top: 4%;
  }

  .intro-area {
    margin-bottom: 2%;
  }
</style>