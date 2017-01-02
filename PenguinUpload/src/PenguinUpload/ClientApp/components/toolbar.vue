<template>
  <div class="toolbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{ appName }}</h2>

<md-button class="md-icon-button" v-on:click="visitGitHub">
  <md-icon>favorite</md-icon>
</md-button>
</md-toolbar>
<md-sidenav class="md-left" ref="leftSidenav">
  <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <h2 class="md-title">{{ appName }}</h2>
    </div>
  </md-toolbar>
  <!--
      <div class="container toolbar-content">
        <h3>GitHub</h3>
        <p>Star {{ appName }} on GitHub!</p>
        <md-button class="md-raised md-accent" @click="visitGitHub">Star</md-button>
      </div>
      -->
  <div class="toolbar-content">
    <!--
        <div class="row">
          <div class="twelve columns">
            
          </div>
        </div>
        -->
    <div class="sidebar-links">
      <md-list class="md-dense">
        <md-list-item @click="closeSidenav" v-if="$root.loggedIn">
          <router-link exact to="/u">Dashboard</router-link>
        </md-list-item>

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
        window.open('https://github.com/0xFireball/' + this.appName)
      },
      toggleLeftSidenav: function () {
        this.$refs.leftSidenav.toggle()
      },
      closeSidenav: function () {
        this.$refs.leftSidenav.close()
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
  .toolbar-content {}
</style>