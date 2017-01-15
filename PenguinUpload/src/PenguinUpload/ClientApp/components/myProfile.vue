<template>
  <div class="my-profile left">
    <h4>Manage Account ({{ $root.u.name }})</h4>
    <div class="p-section">
      <h5>Resource Usage</h5>
      <div v-if="uInfo.loaded">
        <p>
          Using
          <b>{{ uInfo.usage }}</b> of <b>{{ uInfo.quota }}</b>
        </p>
      </div>
      <div v-else>
        <md-spinner md-stroke="1.5" md-indeterminate></md-spinner>
        <p>Retrieving Data</p>
      </div>
      <p></p>
    </div>
    <div class="p-section">
      <h5>API</h5>
      <h6>API Key: <code>{{ $root.u.key }}</code></h6>
      <md-button class="md-primary md-raised" @click="generateNewApiKey">Generate New</md-button>
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
        <md-button class="md-raised md-primary" v-on:click="tryUpdatePassword" :disabled="!updatePassword.e">Change Password</md-button>
      </form>
    </div>
    <div>
      <h5>Danger Zone</h5>
      <md-button class="md-raised md-warn" @click="deleteAllFiles">Delete All Files</md-button>
      <md-button class="md-raised md-warn" @click="deleteAccount">Delete Account</md-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  let axiosRequestConfig = {
    validateStatus: function (status) {
      return status >= 200 && status < 500
    }
  }

  export default {
    data() {
      return {
        updatePassword: {
          old: '',
          password: '',
          confirm: '',
          err: '',
          e: true // enabled
        },
        authRequestParams: {
          params: {
            apikey: ''
          }
        },
        uInfo: {
          quota: null,
          usage: null,
          loaded: false
        }
      }
    },
    methods: {
      generateNewApiKey: function () {
        let vm = this
        vm.$root.showConfirm('Are you sure you want a new API key? The old one will no longer work. You will then be logged out.', 'Confirm Action', function (r) {
          if (r) {
            axios.patch('/api/newkey', {}, vm.authRequestParams)
              .then((res) => {
                // done
                vm.$root.u.key = ''
                vm.$root.showPopup('New API key generated. Please log in again.', 'Success')
                vm.$router.replace('/')
              })
          }
        })
      },
      deleteAllFiles: function () {
        let vm = this
        vm.$root.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {
          if (r) {
            axios.delete('/api/nuke/files', vm.authRequestParams)
              .then(function (res) {
                // files have been nuked.
              })
            // now log out
            vm.$root.u.key = ''
            vm.$router.replace('/')
          }
        })
      },
      deleteAccount: function () {
        let vm = this
        vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {
          if (r1) {
            if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {
              axios.delete('/api/nuke/user', vm.authRequestParams)
                .then(function (res) {
                  // account has been nuked.
                })
              // now log out
              vm.$root.u.key = ''
              vm.$router.replace('/')
            }
          }
        })
      },
      tryUpdatePassword: function () {
        let vm = this
        if (!vm.updatePassword.e) return
        // make sure confirmation is correct
        if (vm.updatePassword.password.length < 8) {
          vm.updatePassword.err = 'password must be at least 8 characters. this is also validated on the server'
          return
        }
        if (vm.updatePassword.password !== vm.updatePassword.confirm) {
          vm.updatePassword.err = 'password confirmation does not match'
          return
        }
        vm.updatePassword.e = false
        // reset error message
        vm.updatePassword.err = ''
        // send updatePassword post
        axios.patch('/changepassword', {
          username: vm.$root.u.name,
          oldPassword: vm.updatePassword.old,
          newPassword: vm.updatePassword.password
        }, axiosRequestConfig)
          .then((response) => {
            // TODO: process response
            if (response.status === 200) {
              // success
              vm.$root.showPopup('Password change succeeded! Please log in again.')
              // log out
              vm.$root.u.key = ''
              vm.$router.replace('/')
            } else if (response.status === 401) {
              // unauthorized because of error
              vm.updatePassword.err = response.data
            }
            vm.updatePassword.e = true
          })
          .catch(function (error) {
            if (error) {
              console.log(error)
            }
            vm.updatePassword.e = true
          })
      }
    },
    mounted: function () {
      // load files from server
      let vm = this
      vm.authRequestParams.params.apikey = vm.$root.u.key
      // load user info
      axios.get('/api/userinfo', vm.authRequestParams)
        .then(function (res) {
          // fetched data
          vm.uInfo = {
            quota: vm.$root.humanFileSize(res.data.quota),
            usage: vm.$root.humanFileSize(res.data.usage),
            loaded: true
          }
        })
    }
  }
</script>

<style scoped>
.p-section {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>