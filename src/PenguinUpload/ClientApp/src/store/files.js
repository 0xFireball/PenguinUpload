import { PenguinUploadApi } from '../api/penguinupload'

const state = {
}

const actions = {
  get_user_info ({state}, api) {
    return api.getUserInfo()
  }
}

const mutations = {
}

const getters = {
}

export default {
  state,
  actions,
  mutations,
  getters
}
