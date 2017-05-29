<template>
  <div>
    <intro></intro>
    <div class="mg-top">
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <div class="center">
            <template v-for="(item, ix) in quicklinks">
              <v-btn 
                :primary="item.primary"
                :secondary="item.secondary"
                :info="item.info"

                @click.native="item.router != null ? visitRoute(item.router) : visitUrl(item.link)">
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
          link: 'https://github.com/0xFireball/PenguinUpload'
        },
        {
          name: 'Log In',
          icon: 'person',
          router: '/login',
          info: true
        },
        {
          name: 'Support',
          icon: 'favorite',
          link: 'https://0xfireball.me',
          primary: true
        }
      ]
    }
  },
  methods: {
    visitUrl (u) {
      window.open(u)
    },
    visitRoute (r) {
      this.$router.push(r)
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