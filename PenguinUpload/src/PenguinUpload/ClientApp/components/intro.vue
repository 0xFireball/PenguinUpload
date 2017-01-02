<template>
  <div class="intro">
    <div class="container">
      <h1 class="app-title">{{ appTitle }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appTitle: 'PenguinUpload',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .intro {
    margin-top: 15%;
    text-align: center;
  }
  
  .app-title {
    font-size: 4rem;
    letter-spacing: 0.1rem;
    font-weight: 300;
  }
</style>