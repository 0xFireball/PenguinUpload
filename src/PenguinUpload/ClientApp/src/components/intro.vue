<template>
  <div class="intro">
    <div class="center">
      <img src="public/icon.png" />
      <h1 class="app-title">{{ appName }}</h1>
    </div>
    <div class="center title-subcontent">
      <p>
        a free, open file hosting service
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    }
  }
}
</script>