<template>
  <div>
    <toolbar></toolbar>

    <transition name="md-router">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/toolbar'
export default {
  data () {
    return {
      loggedIn: false
    }
  },
  components: {
    Toolbar
  }
}
</script>

<style>
  body {
    background: #f7f7f7;
  }
  
  .invisible {
    display: none;
  }
  
  .space-v {
    margin-top: 5%;
    margin-bottom: 5%;
  }
</style>