export const state = () => ({
  opm: {},
  smith_graham: {},
  apple_equities: {},
  golden_qifang: {}
})
export const mutations = {
  SET_OPM(state, opm) {
    state.opm = opm
  },
  SET_SMITH_GRAHAM(state, smith_graham) {
    state.smith_graham = smith_graham
  },
  SET_APPLE_EQUITIES(state, apple_equities) {
    state.apple_equities = apple_equities
  },
  SET_GOLDEN_QIFANG(state, golden_qifang) {
    state.golden_qifang = golden_qifang
  }
}
export const actions = {
  async GET_OPM({ commit }) {
    const res = await this.$axios.get('/v1/portfolio/secondary/summary/13')
    commit('SET_OPM', res.data[0]['data'])
  },
  async GET_SMITH_GRAHAM({ commit }) {
    const res = await this.$axios.get('/v1/portfolio/secondary/summary/8')
    commit('SET_SMITH_GRAHAM', res.data[0]['data'])
  },
  async GET_APPLE_EQUITIES({ commit }) {
    const res = await this.$axios.get('/v1/portfolio/secondary/summary/10')
    commit('SET_APPLE_EQUITIES', res.data[0]['data'])
  },
  async GET_GOLDEN_QIFANG({ commit }) {
    const res = await this.$axios.get('/v1/portfolio/secondary/summary/17')
    commit('SET_GOLDEN_QIFANG', res.data[0]['data'])
  }
}

export const getters = {
  opm(state) {
    return state.opm
  },
  smith_graham(state) {
    return state.smith_graham
  },
  apple_equities(state) {
    return state.apple_equities
  },
  golden_qifang(state) {
    return state.golden_qifang
  }
}
