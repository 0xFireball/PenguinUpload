<template>
  <div>
    <toolbar></toolbar>

    <transition name="md-router">
      <router-view></router-view>
    </transition>

    <md-dialog-alert :md-title="dialog.title" :md-content-html="dialog.content" ref="modalDialog">
    </md-dialog-alert>
  </div>
</template>

<script>
  import Toolbar from './components/toolbar'
  export default {
    data() {
      return {
        u: {
          key: '',
          name: ''
        },
        dialog: {
          title: ' ',
          content: ' '
        }
      }
    },
    computed: {
      loggedIn: function () {
        if (!this.u.key) return false
        return true
      }
    },
    watch: {
      loggedIn: function (nowLoggedIn) {
        // console.log(nowLoggedIn)
        localStorage.setItem('u', JSON.stringify(this.u))
      }
    },
    components: {
      Toolbar
    },
    methods: {
      showPopup: function (content, title) {
        this.dialog.content = content
        this.dialog.title = title
        this.$refs.modalDialog.open()
      }
    },
    created: function () {
      let savedU = localStorage.getItem('u')
      if (savedU) {
        this.u = JSON.parse(savedU)
      }
    }
  }
</script>

<style>
  body {
    background: #f7f7f7;
  }
  
  .invisible {
    display: none;
  }
  
  .space-v {
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .sep-b {
    margin-bottom: 10px;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }
</style>