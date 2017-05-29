<template>
</template>

<script>
export default {
  mounted: function () {
    this.$store.dispatch('logout')
    // proceed
    this.$router.push('/')
  }
}
</script>