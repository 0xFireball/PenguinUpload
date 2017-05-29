<template>
  <div>
    <intro />
    <v-layout row>
      <v-flex xs12 md10 offset-md1 lg6 offset-lg3>
        <downloadFile :item-id="$route.params.id" :item-pass="$route.params.pass" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import intro from '../components/intro.vue'
import downloadFile from '../components/downloadFile.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    }
  },
  components: { intro, downloadFile }
}
</script>