<template>
  <div>
    <div class="content-container">
      <toolbar></toolbar>
      <transition name="md-router">
        <div class="page-content page-view">
          <router-view></router-view>
        </div>
      </transition>
    </div>
    <md-dialog-alert :md-title="dialog.title" :md-content-html="dialog.content" ref="modalDialog">
    </md-dialog-alert>
    <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.content" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel"
      @close="onConfirmClose" ref="confirmDialog">
      </md-dialog-confirm>
      <md-dialog-prompt :md-title="prompt.title" :md-ok-text="prompt.ok" :md-cancel-text="prompt.cancel" :md-input-placeholder="prompt.placeholder"
        @close="onPromptClose" v-model="prompt.resp" ref="promptDialog">
        </md-dialog-prompt>
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
        prompt: {
          title: '',
          ok: 'OK',
          cancel: 'Cancel',
          placeholder: '',
          // maxlength: 0,
          resp: '',
          callback: null
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
      },
      showConfirm: function (content, title, cb, y, n) {
        y = y || 'OK'
        n = n || 'Cancel'
        this.confirm.ok = y
        this.confirm.cancel = n
        this.confirm.content = content
        this.confirm.title = title
        this.confirm.callback = cb
        this.$refs.confirmDialog.open()
      },
      showPrompt: function (title, placeholder, cb) {
        this.prompt.title = title
        this.prompt.placeholder = placeholder
        this.prompt.callback = cb
        this.$refs.promptDialog.open()
      },
      onPromptClose: function (result) {
        if (result == 'ok') {
          this.prompt.callback(this.prompt.resp)
        }

        this.prompt.resp = ''
        this.prompt.callback = null
      },
      onConfirmClose: function (result) {
        this.confirm.callback(result == 'ok')
        this.confirm.callback = null
      },
      // utilities
      humanFileSize: function (bytes) {
        var thresh = 1024
        if (Math.abs(bytes) < thresh) {
          return bytes + ' B'
        }
        var units = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        var u = -1
        do {
          bytes /= thresh
            ++u
        } while (Math.abs(bytes) >= thresh && u < units.length - 1)
        return bytes.toFixed(2) + ' ' + units[u]
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