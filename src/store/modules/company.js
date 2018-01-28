import api from '../../api'

const state = {
}

const getters = {

}

const actions = {
  getCompanyInfo(context, { name }) {
    return api.get('graphql?query={company(name:"' + name + '"){name,users}}')
      .then((res) => {
        console.log(res.data)
      })
  }
}

const mutations = {
  setCompany(state, data) {
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
