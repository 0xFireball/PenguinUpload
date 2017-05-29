<template>
  <div>
    <v-layout row>
      <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
        <file-browser :dir="d" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import fileBrowser from '../components/fileBrowser.vue'

export default {
  data () {
    return {
      d: '/'
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    }
  },
  components: { fileBrowser }
}
</script>