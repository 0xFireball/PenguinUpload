<template>
  <div class="about">
    <div id="app" class="container">
      <div class="row" id="intro-area">
        <div class="twelve columns">
          <intro></intro>
        </div>
      </div>
      <div class="about-content">
        <about></about>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from '../components/intro'
import About from '../components/aboutWidget'

export default {
  data () {
    return {
    }
  },
  components: {
    Intro,
    About
  }
}
</script>

<style scoped>
  .about-content {
    text-align: center;
    /*font-weight: 600;*/
  }
</style>