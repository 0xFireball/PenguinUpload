<template>
  <div>
    <div class="center">
      <img src="public/icon.png" />
      <h2>{{ appName }}</h2>
    </div>
    <div>
      <p>
        {{ appName }} is a game.
      </p>
    </div>
  </div>
</template>

<script>
export default {
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