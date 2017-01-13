<template>
  <div class="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title toolbar-title">{{ appName }}</h2>
      <div v-if="$root.loggedIn">
        <md-menu md-align-trigger>
          <md-button md-menu-trigger>
            <md-icon>account_circle</md-icon>
            <span class="account-username">
              {{ $root.u.name }}
            </span>
          </md-button>
          <md-menu-content>
            <md-menu-item @click="routerGo('/p')">
              Account
            </md-menu-item>
            <md-menu-item @click="routerGo('/u')">
              Dashboard
            </md-menu-item>
            <md-menu-item @click="routerGo('/files')">
              My Files
            </md-menu-item>
            <md-divider></md-divider>
            <md-menu-item @click="logout">
              Log Out
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
      <div v-else>
        <md-button class="md-icon-button" v-on:click="visitGitHub">
          <md-icon>favorite</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <md-sidenav class="main-sidenav md-left md-fixed" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h2 class="md-title">{{ appName }}</h2>
        </div>
      </md-toolbar>
      <div class="toolbar-content">
        <div class="sidebar-links">
          <md-list class="md-dense">
            <template v-if="$root.loggedIn">
              <md-list-item @click="closeSidenav">
                <router-link exact to="/p">Profile</router-link>
              </md-list-item>
              <md-list-item @click="closeSidenav">
                <router-link exact to="/u">Dashboard</router-link>
              </md-list-item>
              <md-list-item @click="closeSidenav">
                <router-link exact to="/files">Files</router-link>
              </md-list-item>
            </template>
            <md-list-item @click="closeSidenav" v-else>
              <router-link exact to="/">Home</router-link>
            </md-list-item>
            <md-list-item @click="closeSidenav">
              <router-link exact to="/about">About</router-link>
            </md-list-item>
            <md-list-item>
              <span>Support</span>
              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset" target="_blank" href="https://github.com/0xFireball/PenguinUpload">
                    GitHub
                  </md-list-item>
                  <md-list-item class="md-inset" href="https://github.com/0xFireball">
                    Donate
                  </md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </md-sidenav>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        appName: 'PenguinUpload',
      }
    },
    methods: {
      visitGitHub: function () {
        window.open('https://github.com/0xFireball/PenguinUpload')
      },
      toggleLeftSidenav: function () {
        this.$refs.leftSidenav.toggle()
      },
      closeSidenav: function () {
        this.$refs.leftSidenav.close()
      },
      logout: function () {
        this.$root.u.key = ''
        this.$router.push('/')
      },
      routerGo: function (u) {
        this.$router.push(u)
      }
    },
    created() {
      // this.updateLoggedInStatus()
      // then register hook
      this.$router.beforeEach((to, from, next) => {
        // this.updateLoggedInStatus()
        next()
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolbar-title {
    flex: 1;
  }
  
  .account-username {
    margin-left: 10px;
  }
</style>