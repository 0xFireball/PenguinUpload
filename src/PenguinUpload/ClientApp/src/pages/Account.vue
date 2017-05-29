<template>
  <div>
    <h3 class="center mg-wrap">User Profile</h3>
    <h4>Manage Account ({{ username }})</h4>

    <div class="p-section">
      <h5>Resource Usage</h5>
      <div v-if="ready">
        <p>
          Using
          <b>{{ userInfo.usage }}</b> of <b>{{ userInfo.quota }}</b>
        </p>
      </div>
      <div v-else>
        <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
        <p>Retrieving Data</p>
      </div>
      <p></p>
    </div>
    <div class="p-section">
      <h5>API</h5>
      <p>API Key: <code>{{ user_api_key }}</code></p>
      <v-btn primary @click.native="generateNewApiKey">Generate New</v-btn>
    </div>
    <div class="p-section">
      <h5>Security</h5>
      <form v-on:submit.prevent="tryUpdatePassword">
        <v-layout row>
          <v-flex xs12 lg6>
            <v-text-field
              label="Current password"
              v-model="updatePassword.old"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 lg6>
            <v-text-field
              label="New password"
              v-model="updatePassword.password"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 lg6>
            <v-text-field
              label="Confirm new password"
              v-model="updatePassword.confirm"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <p class="error--text">{{ updatePassword.err }}</p>
        <input type="submit" class="invisible"></input>
        <v-btn primary @click.native="tryUpdatePassword" :disabled="!updatePassword.e">Change Password</v-btn>
      </form>
    </div>
    <div>
      <h5>Danger Zone</h5>
      <v-btn class="md-raised md-warn" @click.native="deleteAllFiles">Delete All Files</v-btn>
      <v-btn class="md-raised md-warn" @click.native="deleteAccount">Delete Account</v-btn>
    </div>
  </div>
</template>

<script>
import HumanFilesizeMixin from '../util/filesize.js'

export default {
  mixins: [HumanFilesizeMixin],
  data () {
    return {
      userInfo: {
        quota: null,
        usage: null,
      },
      updatePassword: {
        old: '',
        password: '',
        confirm: '',
        err: '',
        e: true // enabled
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
    },
    user_api_key: function () {
      return this.$store.getters.auth_data.key;
    }
  },
  methods: {
    tryUpdatePassword () {

    },

    generateNewApiKey () {

    },

    deleteAllFiles() {

    },

    deleteAccount() {
      let vm = this
      vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {
        if (r1) {
          if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {
            // request account nuke; this will log out
            vm.$store.dispatch('delete_account')
            // proceed
            vm.$router.replace('/')
          }
        }
      })
    }
  },
  mounted: function () {
    this.$store.dispatch('get_user_info', this.$store.getters.api)
      .then((ud) => {
        this.userInfo = {
          quota: this.humanFileSize(ud.quota),
          usage: this.humanFileSize(ud.usage)
        }
        this.ready = true
      })
  }
}
</script>