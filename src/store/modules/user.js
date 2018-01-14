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
  },
  registerUser(context, {email, password, passwordConfirmation}) {
    if (password === passwordConfirmation) {
      return api.post('register/user', {email, password})
        .then((res) => console.log(res))
    }
  },
  registerCompany(context, {name, user, email, password, passwordConfirmation}) {
    return api.post('register/company', {name, user})
      .then((res,context) => registerUser(context, {email, password}))
  },
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
