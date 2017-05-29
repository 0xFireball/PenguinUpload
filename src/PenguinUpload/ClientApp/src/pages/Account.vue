<template>
  <div>
    <h3 class="center mg-wrap">User Profile</h3>
    <h4>Manage Account ({{ username }})</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        quota: null,
        usage: null,
      },
      ready: false
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    },
    username: function () {
      return this.$store.getters.auth_data.un;
    }
  },
  mounted () {
    this.$store.dispatch('get_user_info', this.$store.getters.api)
      .then((ud) => {
        this.userData = ud
        this.ready = true
      })
  }
}
</script>