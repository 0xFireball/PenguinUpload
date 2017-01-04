<template>
  <div class="login">
    <md-tabs class="md-accent" ref="authOptionTabs">
      <md-tab id="t-login" md-label="Log In">
        <form v-on:submit.prevent="tryLogin">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="login.username"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="login.password"></md-input>
          </md-input-container>
          <p class="error-message">{{ login.err }}</p>
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="tryLogin" :disabled="!login.e">Log In</md-button>
        </form>
      </md-tab>

      <md-tab id="t-signup" md-label="Sign Up">
        <form v-on:submit.prevent="tryRegister">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="register.username"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Password</label>
            <md-input type="password" v-model="register.password"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Confirm Password</label>
            <md-input type="password" v-model="register.confirm"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Invite Key (optional)</label>
            <md-input type="password" v-model="register.inviteKey"></md-input>
          </md-input-container>
          <md-checkbox v-model="register.iaccept">I accept the Terms and Conditions</md-checkbox>
          <p class="error-message">{{ register.err }}</p>
          <input type="submit" class="invisible"></input>
          <md-button class="md-raised md-primary" v-on:click="tryRegister" :disabled="!register.e">Sign Up</md-button>
        </form>
      </md-tab>
    </md-tabs>
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
        login: {
          username: '',
          password: '',
          err: '',
          e: true // enabled
        },
        register: {
          username: '',
          password: '',
          confirm: '',
          iaccept: '',
          inviteKey: '',
          err: '',
          e: true // enabled
        }
      }
    },
    methods: {
      tryLogin: function () {
        // nothing
        let vm = this
        if (!vm.login.e) return
        if (!vm.login.password || !vm.login.username) {
          vm.login.err = 'credentials cannot be empty'
          return
        }
        vm.login.e = false
        // reset error message
        vm.login.err = ''
        // send login post
        axios.post('/login', {
          username: vm.login.username,
          password: vm.login.password
        })
          .then((response) => {
            // TODO: process response
            if (response.status === 200) {
              // succeeded
              // vm.$root.loggedIn = true
              // push user info
              vm.$root.u.key = response.data.apikey
              vm.$root.u.name = response.data.user.username
              // console.log(vm.$root.u.name)
              vm.$router.push('/u')
            } else if (response.status == 401) {
              // unauthorized
              vm.login.err = response.data
            }
            vm.login.e = true
          })
          .catch(function (error) {
            // TODO: handle error
            if (error) {
              vm.login.err = 'invalid login credentials'
            }
            vm.login.e = true
          })
      },
      tryRegister: function () {
        let vm = this
        if (!vm.register.e) return
        // make sure confirmation is correct
        if (vm.register.username.length < 3) {
          vm.register.err = 'username must be at least 3 characters. this is also validated on the server'
          return
        }
        if (vm.register.password.length < 8) {
          vm.register.err = 'password must be at least 8 characters. this is also validated on the server'
          return
        }
        if (!vm.register.iaccept) {
          vm.register.err = 'you must accept the terms and conditions'
          return
        }
        if (vm.register.password !== vm.register.confirm) {
          vm.register.err = 'password confirmation does not match'
          return
        }
        vm.register.e = false
        // reset error message
        vm.register.err = ''
        // send register post
        axios.post('/register', {
          username: vm.register.username,
          password: vm.register.password,
          inviteKey: vm.register.inviteKey
        }, axiosRequestConfig)
          .then((response) => {
            // TODO: process response
            if (response.status === 200) {
              // registration succeeded
              vm.$root.showPopup('Registration succeeded! You may now log in.', 'Success')
              // this.$refs.authOptionTabs.changeTab('t-login')
            } else if (response.status === 401) {
              // unauthorized because of error
              vm.register.err = response.data
            }
            vm.register.e = true
          })
          .catch(function (error) {
            if (error) {
              console.log(error)
            }
            vm.register.e = true
          })
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