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
    this.axios = axios.create({
      baseURL: this.ep,
      headers: {
        Authorization: this.key
      },
      responseType: 'json'
    })
  }
}
