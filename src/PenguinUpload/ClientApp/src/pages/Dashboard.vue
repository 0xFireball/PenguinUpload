<template>
  <div>
    <v-layout row>
      <v-flex xs6>
        <v-card>
          <v-card-row class="primary">
            <v-card-title>
              <span class="white--text">Server Status</span>
            </v-card-title>
          </v-card-row>
          <v-list two-line>
            <template v-for="(item, ix) in server_status">
              <v-subheader v-if="item.header" v-text="item.header" />
              <v-divider v-else-if="item.divider" v-bind:inset="item.inset" />
              <v-list-item v-else v-bind:key="item.name">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ item.name }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{ item.value }} {{ item.unit }}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-row class="secondary">
            <v-card-title>
              <span class="white--text">Resource Overview</span>
            </v-card-title>
          </v-card-row>
          <v-list two-line>
            <template v-for="(item, ix) in resources">
              <v-subheader v-if="item.header" v-text="item.header" />
              <v-divider v-else-if="item.divider" v-bind:inset="item.inset" />
              <v-list-item v-else v-bind:key="item.name">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ item.name }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{ item.amount }} {{ item.unit }}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      server_status: [
        { header: 'Server Health' },
        { name: 'Tick Rate', value: "1154 ms" },
        { divider: true, inset: true },
        { name: 'Player Count', value: 14 },
        { divider: true, inset: true },
        { name: 'Map Size (rooms)', value: 34 }
      ],
      resources: [
        { header: 'Total Resources' },
        { name: 'NRG', amount: 63574, unit: 'NG' },
        { divider: true, inset: true },
        { name: 'Metal', amount: 4506, unit: 'kg' },
        { divider: true, inset: true },
        { name: 'Oil', amount: 5648, unit: 'L' }
      ]
    }
  },
  computed: {
    appName: function () {
      return this.$store.state.data.appName
    },
    username: function () {
      return this.$store.getters.auth_data.un;
    }
  }
}
</script>