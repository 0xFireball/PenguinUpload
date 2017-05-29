/**
 * PenguinUpload Client
 * @author Nihal Talur (0xFireball) <0xFireball@outlook.com>
 */

import axios from 'axios'

export class PenguinUploadApi {
  constructor (endpoint, key = null) {
    this.ep = endpoint
    this.init(key)
  }

  static create (endpoint, apikey = null) {
    return new Promise((resolve, reject) => {
      let api = new PenguinUploadApi(endpoint, apikey)
      resolve(api)
    })
  }

  init (key = null) {
    this.key = key
    this.username = null
    this.ax()
  }

  ax () {
    this.axios = axios.create({
      baseURL: this.ep,
      headers: {
        Authorization: this.key
      },
      responseType: 'json'
    })
  }

  /* actions */
  login (un, pw) {
    return new Promise((resolve, reject) => {
      this.ax()
      this.axios.post('/login', {
        username: un,
        password: pw
      }).then((res) => {
        if (res.status !== 200) return reject(PenguinUploadErrors.CredentialError())
        this.key = res.data.apikey
        this.username = res.data.user.username
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }

  reauth (un, key) {
    return new Promise((resolve, reject) => {
      this.ax()
      this.axios.post('/reauth', {
        username: un,
        apikey: key
      }).then((res) => {
        if (res.status !== 200) return reject(PenguinUploadErrors.CredentialError())
        this.key = res.data.apikey
        this.username = res.data.user.username
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }

  register (un, pw, i = null) {
    return new Promise((resolve, reject) => {
      this.ax()
      this.axios.post('/register', {
        username: un,
        password: pw,
        invitekey: i
      }).then((res) => {
        if (res.status !== 200) return reject(SpeercsErrors.CredentialError())
        this.login(un, pw)
          .then(() => {
            resolve()
          })
      }).catch((err) => {
        reject(err)
      })
    })
  }

  logout () {
    this.key = null
    this.init()
  }

  regenApiKey () {
    this.ax()
    return this.axios.patch('/api/newkey')
  }

  changePassword (old, newp) {
    return new Promise((resolve, reject) => {
      this.ax()
      this.axios.patch('/changepassword', {
        username: this.username,
        oldPassword: old,
        newPassword: newp
      })
        .then((res) => {
          console.log('password changed successfully')
          resolve(res)
        })
        .catch((e) => reject(e))
    })
  }

  deleteAllFiles () {
    this.ax()
    return this.axios.delete('/api/nuke/files')
  }

  deleteAccount () {
    this.ax()
    return this.axios.delete('/api/nuke/user')
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      this.ax()
      this.axios.get('/api/userinfo')
        .then((res) => {
          resolve({
            quota: res.data.quota,
            usage: res.data.usage
          })
        }).catch((err) => {
          reject(err)
        })
    })
  }

  /* getters */
  getKey() { return this.key }

}

class PenguinUploadErrors {
  static CredentialError () {
    return new Error('invalid credentials')
  }
  static KeyError () {
    return new Error('invalid api key')
  }
}
