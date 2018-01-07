import api from '../../api'

const state = {
  email: '',
  token: '',
  admin: false,
  logged: false
}

const getters = {
  getEmail: state => state.email,
  getToken: state => state.token,
  isAdmin: state => state.admin,
  isLogged: state => state.logged
}

const actions = {
  loginUser(context, {email, password}) {
    return api.post('login', {email, password})
      .then((res) => context.commit('setUser', { email, token: res.data.token }))
  }
}

const mutations = {
  setUser(state, { email, token }) {
    state.email = email
    state.logged = true
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
