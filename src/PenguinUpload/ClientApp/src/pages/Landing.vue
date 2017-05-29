<template>
  <div>
    <div class="center">
      <img src="public/icon.png" />
      <h1 class="app-title">{{ appName }}</h1>
    </div>
    <div class="center title-subcontent">
      <p>
        a free, open file hosting service
      </p>
    </div>
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
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    }
  },
  methods: {
    visitUrl (u) {
      window.open(u)
    }
  }
}
</script>

<style>
.title-subcontent {
  margin-top: 2%;
}
</style>