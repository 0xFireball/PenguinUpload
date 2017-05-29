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
      this.axios.post('/login', {
        username: un,
        password: pw
      }).then((res) => {
        if (res.status !== 200) return reject(PenguinUploadErrors.CredentialError())
        this.key = res.data.apikey
        this.username = res.data.user.username
        this.ax()
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }

  register (un, pw, i = null) {
    return new Promise((resolve, reject) => {
      this.axios.post('/register', {
        username: un,
        password: pw,
        invitekey: i
      }).then((res) => {
        if (res.status !== 200) return reject(SpeercsErrors.CredentialError())
        this.ax()
        this.login(un, pw)
          .then(() => {
            resolve()
          })
      }).catch((err) => {
        if (err.response) {
          // console.log(err.response.data)
        }
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
