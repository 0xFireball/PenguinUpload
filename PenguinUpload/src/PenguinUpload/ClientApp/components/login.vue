<template>
  <div class="login">
    <md-tabs class="md-accent" ref="authOptionTabs">
      <md-tab id="t-login" md-label="Log In">
        <form v-on:submit.prevent="tryLogin">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="lUsername"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="lPassword"></md-input>
          </md-input-container>
          <p class="error-message">{{ lErrMsg }}</p>
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="tryLogin">Log In</md-button>
        </form>
      </md-tab>

      <md-tab id="t-signup" md-label="Sign Up">
        <form v-on:submit.prevent="tryRegister">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="rUsername"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="rPassword"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Confirm Password</label>
            <md-input type="password" v-model="rConfirmPassword"></md-input>
          </md-input-container>
          <md-checkbox v-model="iaccept">I accept the Terms and Conditions</md-checkbox>
          <p class="error-message">{{ rErrMsg }}</p>
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="tryRegister">Sign Up</md-button>
        </form>
      </md-tab>
    </md-tabs>
    <md-dialog-alert :md-title="dialog.title" :md-content-html="dialog.content" ref="modalDialog">
    </md-dialog-alert>
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
    name: 'login',
    data() {
      return {
        lUsername: '', // login username
        lPassword: '', // login password
        rUsername: '', // login username
        rPassword: '', // register password
        rConfirmPassword: '', // register confirm password
        lErrMsg: '', // login error message
        rErrMsg: '', // register error message
        iaccept: false,
        dialog: {
          title: ' ',
          content: ' '
        },
      }
    },
    methods: {
      tryLogin: function () {
        // nothing
        let vm = this
        // reset error message
        vm.lErrMsg = ''
        // send login post
        axios.post('/login', {
          username: vm.lUsername,
          password: vm.lPassword
        })
          .then((response) => {
            // TODO: process response
            if (response.status === 200) {
              // succeeded
              vm.$router.push('/u');
            } else if (response.status == 401) {
              // unauthorized
              vm.lErrMsg = response.data
            }
          })
          .catch(function (error) {
            // TODO: handle error
            if (error) {
              vm.lErrMsg = 'invalid login credentials'
            }
          })
      },
      tryRegister: function () {
        // nothing
        let vm = this
        // make sure confirmation is correct
        if (vm.rUsername.length < 3) {
          vm.rErrMsg = 'username must be at least 3 characters. this is also validated on the server'
          return
        }
        if (vm.rPassword.length < 8) {
          vm.rErrMsg = 'password must be at least 8 characters. this is also validated on the server'
          return
        }
        if (!vm.iaccept) {
          vm.rErrMsg = 'you must accept the terms and conditions'
          return
        }
        if (vm.rPassword !== vm.rConfirmPassword) {
          vm.rErrMsg = 'password confirmation does not match'
          return
        }
        // reset error message
        vm.rErrMsg = ''
        // send register post
        axios.post('/register', {
          username: vm.rUsername,
          password: vm.rPassword
        }, axiosRequestConfig)
          .then((response) => {
            // TODO: process response
            if (response.status === 200) {
              // registration succeeded
              this.showPopup('Registration succeeded! You may now log in.', 'Success')
              // this.$refs.authOptionTabs.changeTab('t-login')
            } else if (response.status === 401) {
              // unauthorized because of error
              vm.rErrMsg = response.data
            }
          })
          .catch(function (error) {
            if (error) {
              console.log(error)
            }
          })
      },
      showPopup: function (content, title) {
        this.dialog.content = content
        this.dialog.title = title
        this.$refs.modalDialog.open()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .invisible {
    display: none;
  }
  .error-message {
    color: red;
  }
</style>