<template>
  <div class="about">
    <h5>About {{ appName }}</h5>
    <p>
      PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.
    </p>
    <div class="mg-top">
      <h5>Application Instance Information</h5>
      <h6 class="version-info">
        Application version (server): <code>{{ app_version }}</code>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      app_version: window.$appVersion
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    }
  }
}
</script>

<style>
.version-info {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>