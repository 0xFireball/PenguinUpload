<template>
  <div class="aboutWidget">
    <h5>About {{ appName }}</h5>
    <p>
      Easy file hosting/uploads
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      appName: 'PenguinUpload'
    }
  }
}
</script>

<style scoped>
  .aboutWidget {
    margin: 2%;
  }
  
  h6.credit-text {
    font-weight: 300;
  }
</style>