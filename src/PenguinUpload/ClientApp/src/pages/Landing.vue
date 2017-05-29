<template>
  <div>
    <intro></intro>
    <div class="mg-top">
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <div class="center">
            <template v-for="(item, ix) in quicklinks">
              <v-btn :primary="item.primary" @click.native="visitUrl(item.link)">
                {{ item.name }}
                <v-icon right>{{ item.icon }}</v-icon>
              </v-btn>
            </template>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import intro from '../components/intro.vue'

export default {
  data () {
    return {
      quicklinks: [
        {
          name: 'Source',
          icon: 'code',
          link: 'https://github.com/0xFireball/PenguinUpload',
          primary: false
        }
      ]
    }
  },
  methods: {
    visitUrl (u) {
      window.open(u)
    }
  },
  components: { intro }
}
</script>

<style>
.title-subcontent {
  margin-top: 2%;
}
</style>