<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs10 offset-xs1 lg6 offset-lg3>
            <template v-if="mode === 'login'">
              <v-text-field
                name="username-input"
                label="Username"
                v-model="un"
              ></v-text-field>
              <v-text-field
                name="password-input"
                label="Password"
                type="password"
                v-model="pw"
              ></v-text-field>
              <v-subheader class="error--text" v-if="err !== null">{{ err }}</v-subheader>
              <input type="submit" class="invisible"></input>
              <div class="center">
                <v-btn @click.native="proceed_login" :disabled="!canProceed" primary raised ripple>Login</v-btn>
              </div>
            </template>
            <template v-else-if="mode === 'register'">
              <v-text-field
                name="username-input"
                label="Username"
                v-model="un"
              ></v-text-field>
              <v-text-field
                name="password-input"
                label="Password"
                type="password"
                v-model="pw"
              ></v-text-field>
              <v-text-field
                name="ikey-input"
                label="Invite Key"
                type="password"
                v-model="ikey"
              ></v-text-field>
              <v-subheader class="error--text" v-if="err !== null">{{ err }}</v-subheader>
              <input type="submit" class="invisible"></input>
              <div class="center">
                <v-btn @click.native="proceed_register" :disabled="!canProceed" primary raised ripple>Register</v-btn>
              </div>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'loginForm',
  props: ['mode'],
  data () {
    return {
      un: null,
      pw: null,
      ikey: null,
      err: null,
      canProceed: true
    }
  },
  methods: {
    attempt_relogin () {
      this.$store.dispatch('ensure_api', `${window.location.origin}/`)
        .then(() => {
          this.$store.dispatch('attempt_reauthenticate')
            .then(() => {
              console.log('reauthenticated successfully')
              // proceed
              this.onProceed()
            })
        })
    },
    proceed_login () {
      this.canProceed = false
      let b = {
        un: this.un,
        pw: this.pw
      }
      this.$store.dispatch('ensure_api', `${window.location.origin}/`)
        .then(() => {
          this.$store.dispatch('authenticate', b)
            .then(() => {
              console.log('login successful')
              // proceed
              this.onProceed()
            })
            .catch((e) => {
              this.canProceed = true
              this.err = 'invalid credentials'
              console.log('login failure', e)
            })
        })
    },
    proceed_register () {
      this.canProceed = false
      let b = {
        un: this.un,
        pw: this.pw,
        invite: this.ikey
      }
      this.$store.dispatch('ensure_api', `${window.location.origin}/`)
        .then((rs) => {
          this.$store.dispatch('register_account', b)
            .then(() => {
              console.log('registration successful')
              // proceed
              this.onProceed()
            })
            .catch((e) => {
              this.canProceed = true
              this.err = 'registration failed'
              if (e.response) {
                this.err += `: ${e.response.data}`
              }
              console.log('registration failure', e)
            })
        })
    },
    onProceed () {
      if (this.$route.query.r) {
        this.$router.push(this.$route.query.r)
      } else {
        this.$router.push('/d')
      }
    }
  },
  mounted () {
    this.attempt_relogin()
  }
}
</script>