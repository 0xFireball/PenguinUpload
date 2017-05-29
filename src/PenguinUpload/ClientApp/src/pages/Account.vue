<template>
  <div>
    <h3 class="center mg-wrap">User Profile</h3>
    <h4>Manage Account ({{ username }})</h4>

    <div class="p-section">
      <h5>Resource Usage</h5>
      <div v-if="loaded">
        <p>
          Using
          <b>{{ userInfo.usage }}</b> of <b>{{ userInfo.quota }}</b>
        </p>
      </div>
      <div v-else>
        <md-spinner :md-stroke="1.5" md-indeterminate></md-spinner>
        <p>Retrieving Data</p>
      </div>
      <p></p>
    </div>
    <div class="p-section">
      <h5>API</h5>
      <h6>API Key: <code>{{ user_api_key }}</code></h6>
      <md-button class="md-primary md-raised" @click.native="generateNewApiKey">Generate New</md-button>
    </div>
    <div class="p-section">
      <h5>Security</h5>
      <form v-on:submit.prevent="tryUpdatePassword">
        <div class="row">
          <div class="eight columns">
            <md-input-container>
              <label>Current password</label>
              <md-input type="password" v-model="updatePassword.old"></md-input>
            </md-input-container>
          </div>
        </div>
        <div class="row">
          <div class="six columns">
            <md-input-container md-has-password>
              <label>New Password</label>
              <md-input type="password" v-model="updatePassword.password"></md-input>
            </md-input-container>
          </div>
          <div class="six columns">
            <md-input-container>
              <label>Confirm New Password</label>
              <md-input type="password" v-model="updatePassword.confirm"></md-input>
            </md-input-container>
          </div>
        </div>
        <p class="error-message">{{ updatePassword.err }}</p>
        <input type="submit" class="invisible"></input>
        <md-button class="md-raised md-primary" @click.native="tryUpdatePassword" :disabled="!updatePassword.e">Change Password</md-button>
      </form>
    </div>
    <div>
      <h5>Danger Zone</h5>
      <md-button class="md-raised md-warn" @click.native="deleteAllFiles">Delete All Files</md-button>
      <md-button class="md-raised md-warn" @click.native="deleteAccount">Delete Account</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
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
    },
    user_api_key: function () {
      return this.$store.getters.auth_data.key;
    }
  },
  mounted () {
    this.$store.dispatch('get_user_info', this.$store.getters.api)
      .then((ud) => {
        this.userInfo = ud
        this.ready = true
      })
  }
}
</script>