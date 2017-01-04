<template>
  <div class="my-profile left">
    <h4>Manage Account</h4>
    <div>
      <h5>Security</h5>
      <form v-on:submit.prevent="tryupdatePassword">
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
        <md-button class="md-raised md-primary" v-on:click="tryupdatePassword" :disabled="!updatePassword.e">Change Password</md-button>
      </form>
    </div>
    <div>
      <h5>Danger Zone</h5>
      <md-button class="md-raised md-warn" @click="deleteAllFiles">Delete All Files</md-button>
      <md-button class="md-raised md-warn" @click="deleteAccount">Delete Account</md-button>
    </div>
    <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.content" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel"
      @close="onConfirmClose" ref="confirmDialog">
    </md-dialog-confirm>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        confirm: {
          title: ' ',
          content: ' ',
          ok: 'OK',
          cancel: 'Cancel',
          callback: null
        },
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
        }
      }
    },
    methods: {
      showConfirm: function (content, title, cb) {
        this.confirm.content = content
        this.confirm.title = title
        this.confirm.callback = cb
        this.$refs.confirmDialog.open()
      },
      onConfirmClose: function (result) {
        this.confirm.callback(result == 'ok')
        this.confirm.callback = null
      },
      deleteAllFiles: function () {
        let vm = this
        vm.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {
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
        vm.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {
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
      }
    },
    mounted: function () {
      // load files from server
      let vm = this
      vm.authRequestParams.params.apikey = vm.$root.u.key
    }
  }
</script>

<style scoped>
</style>