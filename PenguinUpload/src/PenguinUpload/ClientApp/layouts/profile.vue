<template>
  <div class="shrink-layout">
    <!--<img src="./assets/logo.png">-->
    <div class="container">
      <intro view-title="User Profile"></intro>
      <div class="row">
        <div class="twelve columns">
          <myProfile></myProfile>
        </div>
      </div>
      <devCredits></devCredits>
    </div>
  </div>
</template>

<script>
  import Intro from '../components/intro'
  import myProfile from '../components/myProfile'
  import devCredits from '../components/devCredits'

  export default {
    data() {
      return {
      }
    },
    components: {
      Intro,
      myProfile,
      devCredits
    },
    beforeRouteEnter(to, from, next) {
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
    margin-top: 60px;
  }
</style>