<template>
  <div class="not-found">
    <div id="app" class="container">
      <div class="row" id="intro-area">
        <div class="twelve columns">
          <intro></intro>
        </div>
      </div>
      <div class="not-found-content">
        <h1>404. That's an error.</h1>
        <h3>The page you were looking for couldn't be found.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro'

export default {
  data () {
    return {
    }
  },
  components: {
    Intro
  }
}
</script>

<style scoped>
  .not-found-content {
    text-align: center;
    font-weight: 600;
  }
</style>