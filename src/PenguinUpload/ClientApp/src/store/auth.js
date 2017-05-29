import { PenguinUploadApi } from '../api/penguinupload'

const state = {
  loggedIn: false,
  authData: {
    un: null,
    key: null
  },
  api: null
}

const actions = {
  ensure_api ({commit, state}, endpoint) {
    return new Promise((resolve, reject) => {
      if (state.api === null) {
        PenguinUploadApi.create(endpoint)
          .then((api) => {
            commit('save_api', api)
            resolve(true)
          })
          .catch((e) => {
            reject(e)
          })
      } else {
        resolve(false)
      }
    })
  },
  authenticate ({commit, state}, auth) {
    return new Promise((resolve, reject) => {
      let resultData = {
        success: false
      }
      state.api.login(auth.un, auth.pw)
      .then(() => {
        resultData.success = true
        resultData.un = auth.un
        resultData.key = state.api.getKey()
        commit('login_result', resultData)
        resolve()
      })
      .catch((e) => {
        commit('login_result', resultData)
        console.log(e)
        reject(new Error('login failed'))
      })
    })
  },
  register_account ({commit, state}, auth) {
    return new Promise((resolve, reject) => {
      let resultData = {
        success: false
      }
      state.api.register(auth.un, auth.pw, auth.invite)
      .then(() => {
        resultData.success = true
        resultData.un = auth.un
        resultData.key = state.api.getKey()
        commit('login_result', resultData)
        resolve()
      })
      .catch((e) => {
        commit('login_result', resultData)
        console.log(e)
        reject(new Error('register failed'))
      })
    })
  },
  delete_all_files ({commit, state}, auth) {
    return new Promise((resolve, reject) => {
      state.api.deleteAllFiles()
        .then((r) => {
          commit('login_result', { success: false })
          resolve()
        })
    })
  },
  delete_account ({commit, state}, auth) {
    return new Promise((resolve, reject) => {
      state.api.deleteAccount()
        .then((r) => {
          commit('login_result', { success: false })
          resolve()
        })
    })
  },
  logout ({commit, state}) {
    return new Promise((resolve, reject) => {
      state.api.logout()
        .then((r) => {
          commit('login_result', { success: false })
          resolve()
        })
    })
  }
}

const mutations = {
  login_result (state, data) {
    if (data.success) {
      state.authData.un = data.un
      state.authData.key = data.key
      state.loggedIn = true
    } else {
      state.authData.un = null
      state.authData.key = null
      state.loggedIn = false
    }
  },
  save_api (state, api) {
    state.api = api
  }
}

const getters = {
  api_available (state) {
    return state.api !== null
  },
  auth_data (state) {
    return state.authData
  },
  is_logged_in (state) {
    return state.loggedIn
  },
  api (state) {
    return state.api
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
