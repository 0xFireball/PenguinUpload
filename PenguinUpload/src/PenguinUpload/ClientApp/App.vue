<template>
  <div>
    <toolbar></toolbar>

    <transition name="md-router">
      <router-view></router-view>
    </transition>

    <md-dialog-alert :md-title="dialog.title" :md-content-html="dialog.content" ref="modalDialog">
    </md-dialog-alert>

    <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.content" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel"
      @close="onConfirmClose" ref="confirmDialog">
    </md-dialog-confirm>
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
        },
        confirm: {
          title: ' ',
          content: ' ',
          ok: 'OK',
          cancel: 'Cancel',
          callback: null
        },
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
      },
      showConfirm: function (content, title, cb) {
        this.confirm.content = content
        this.confirm.title = title
        this.confirm.callback = cb
        this.$refs.confirmDialog.open()
      },
      onConfirmClose: function (result) {
        this.confirm.callback(result == 'ok')
        this.confirm.callback = null
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