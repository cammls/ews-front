import axios from 'axios'
import router from './../router'
import store from './../store'

const LOCAL_URL = 'http://localhost:4000/api/'
const PROD_URL = 'https://monarqapp.com/api/'

function option() {
  return {
    headers: {
      'Authorization': store.getters.getToken,
      'Content-Type': 'application/json'
    }
  }
}

export default {
  get(endpoint) {
    return new Promise((resolve, reject) => {
      axios.get(this.getBaseUrl() + endpoint, option()).then(response => {
        resolve(response)
      }, error => {
        if (error && error.response && error.response.status === 401) {
          this.redirect()
        }
        reject(error)
      })
    })
  },
  put(endpoint, data) {
    return new Promise((resolve, reject) => {
      axios.put(this.getBaseUrl() + endpoint, data, option()).then(response => {
        resolve(response)
      }, error => {
        if (error && error.response && error.response.status === 401) {
          this.redirect()
        }
        reject(error)
      })
    })
  },
  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      axios.post(this.getBaseUrl() + endpoint, data, option()).then(response => {
        resolve(response)
      }, error => {
        if (error && error.response && error.response.status === 401) {
          this.redirect()
        }
        // router.push('/')
        reject(error)
      })
    })
  },
  delete(endpoint) {
    return new Promise((resolve, reject) => {
      axios.delete(this.getBaseUrl() + endpoint, option()).then(response => {
        resolve(response)
      }, error => {
        if (error && error.response && error.response.status === 401) {
          this.redirect()
        }
        reject(error)
      })
    })
  },
  getBaseUrl() {
    if (window.location.hostname === 'localhost') {
      return LOCAL_URL
    }
    return PROD_URL
  },
  redirect() {
    router.push('/login')
  }
}
