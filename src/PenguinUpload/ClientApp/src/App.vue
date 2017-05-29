<template>
  <v-app :dark="dark_theme">
    <v-navigation-drawer
      persistent
      :clipped="false"
      v-model="sidebar_v"
    >
      <v-list>
        <template v-for="(item, i) in sidebar">
          <v-subheader v-if="item.header" v-text="item.header" />
          <v-divider v-else-if="item.divider" light />
          <v-list-item v-else>
            <template v-if="!item.autoHide || (item.unauthRequired && !loggedIn) || (item.authRequired && loggedIn)">
              <v-list-tile :router="item.router != null" :href="item.router || item.link" ripple>
                <v-list-tile-avatar>
                  <v-icon>{{ item.avatar }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title v-text="item.title" />    
              </v-list-tile>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sidebar_v = !sidebar_v"></v-toolbar-side-icon>
      <v-toolbar-title v-text="appName"></v-toolbar-title>
      <v-btn icon light @click.native="visitUrl('https://0xfireball.me')">
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <div class="content-container">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </v-slide-y-transition>
      </v-container>
    </main>

    <v-dialog persistent v-model="confirmDialogOpen" ref="confirmDialog">
      <v-card>
        <v-card-row>
          <v-card-title>{{ confirmDialog.title }}</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>{{ confirmDialog.content }}</v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="onConfirmResult(false)">{{ confirmDialog.cancel }}</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="onConfirmResult(true)">{{ confirmDialog.ok }}</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>

    <v-dialog persistent v-model="promptDialogOpen" ref="promptDialog">
      <v-card>
        <v-card-row>
          <v-card-title>{{ promptDialog.title }}</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-text-field :label="promptDialog.hint"  v-model="promptDialog.resp" required></v-text-field>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="onPromptResult(false)">{{ promptDialog.cancel }}</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="onPromptResult(true)">{{ promptDialog.ok }}</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        sidebar_v: true,
        dark_theme: false,
        sidebar: [
          { header: 'Quick Links' },
          // {
          //   title: 'Parent',
          //   items: [
          //     { title: 'Child' },
          //     { title: 'Child' },
          //     { title: 'Child' }
          //   ]
          // },
          { 
            title: 'Home',
            avatar: 'home',
            router: '/'
          },
          { 
            title: 'Dashboard',
            avatar: 'dashboard',
            router: '/d',
            authRequired: true,
            autoHide: true
          },
          { 
            title: 'Files',
            avatar: 'cloud',
            router: '/f',
            authRequired: true,
            autoHide: true
          },
          {
            title: 'Account',
            avatar: 'person',
            router: '/u',
            authRequired: true,
            autoHide: true
          },
          {
            title: 'Login',
            avatar: 'person',
            router: '/login',
            unauthRequired: true,
            autoHide: true
          },
          {
            title: 'Register',
            avatar: 'create',
            router: '/register',
            unauthRequired: true,
            autoHide: true
          },
          {
            title: 'Logout',
            avatar: 'exit_to_app',
            router: '/logout',
            authRequired: true,
            autoHide: true
          },
          { 
            title: 'About',
            avatar: 'info',
            router: 'about'
          },
          { divider: true },
          { header: 'Support' },
          { 
            title: 'Report Bugs',
            avatar: 'error',
            link: 'https://github.com/0xFireball/PenguinUpload/issues'
          }
        ],
        confirmDialog: {
          title: '',
          content: '',
          ok: 'OK',
          cancel: 'Cancel',
          callback: null
        },
        promptDialog: {
          title: '',
          ok: 'OK',
          cancel: 'Cancel',
          hint: '',
          resp: '',
          callback: null
        },
        confirmDialogOpen: false,
        promptDialogOpen: false
      }
    },
    computed: {
      appName: function() {
        return this.$store.state.data.appName
      },
      loggedIn: function() {
        return this.$store.state.auth.loggedIn
      }
    },
    methods: {
      showConfirm (tx, ti, cb, y, n) {
        y = y || 'OK'
        n = n || 'Cancel'
        this.confirmDialog.ok = y
        this.confirmDialog.cancel = n
        this.confirmDialog.content = tx
        this.confirmDialog.title = ti
        this.confirmDialog.callback = cb
        this.confirmDialogOpen = true
      },
      showPrompt: function (ti, h, cb, y, n) {
        y = y || 'OK'
        n = n || 'Cancel'
        this.promptDialog.ok = y
        this.promptDialog.cancel = n
        this.promptDialog.hint = h
        this.promptDialog.title = ti
        this.promptDialog.callback = cb
        this.promptDialogOpen = true
      },
      onConfirmResult (r) {
        this.confirmDialogOpen = false
        this.confirmDialog.callback(r)
        this.confirmDialog.callback = null
      },
      onPromptResult (r) {
        this.promptDialogOpen = false
        if (r && this.promptDialog.resp) {
          this.promptDialog.callback(this.promptDialog.resp)
        } else {
          this.promptDialog.callback(false)
        }
        this.promptDialog.resp = ''
        this.promptDialog.callback = null
      },
      visitUrl (u) {
        window.open(u, '_blank')
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'

  // $material-theme := $material-dark
</style>