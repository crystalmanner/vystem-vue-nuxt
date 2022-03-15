export const state = () => ({
  columbia: {},
  nw: {},
  first_security: {},
  george: {},
  dv: {},
  vdv: {},
  fund_1: {},
  summary: {}
})
export const mutations = {
  SET_COLUMBIA(state, columbia) {
    state.columbia = columbia
  },
  SET_NW(state, nw) {
    state.nw = nw
  },
  SET_1ST(state, first_security) {
    state.first_security = first_security
  },
  SET_GEORGE(state, george) {
    state.george = george
  },
  SET_DV(state, dv) {
    state.dv = dv
  },
  SET_VDV(state, vdv) {
    state.vdv = vdv
  },
  SET_FUND1(state, fund_1) {
    state.fund_1 = fund_1
  },
  SET_SUMMARY(state, summary) {
    state.summary = summary
  }
}
export const actions = {
  async GET_COLUMBIA({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/6')
    commit('SET_COLUMBIA', res.data[0]['data'])
  },
  async GET_NW({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/8')
    commit('SET_NW', res.data[0]['data'])
  },
  async GET_1ST({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/21')
    commit('SET_1ST', res.data[0]['data'])
  },
  async GET_GEORGE({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/17')
    commit('SET_GEORGE', res.data[0]['data'])
  },
  async GET_DV({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/18')
    commit('SET_DV', res.data[0]['data'])
  },
  async GET_VDV({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/loc/summary/19')
    commit('SET_VDV', res.data[0]['data'])
  },
  async GET_FUND1({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/fund1/detail/')
    commit('SET_FUND1', res.data[0]['data'])
  },
  async GET_SUMMARY({
    commit
  }) {
    const res = await this.$axios.get('/v1/portfolio/summary/?')
    commit('SET_SUMMARY', res.data[0]['data'])
  }
}

export const getters = {
  columbia(state) {
    return state.columbia
  },
  nw(state) {
    return state.nw
  },
  george(state) {
    return state.george
  },
  first_security(state) {
    return state.first_security
  },
  dv(state) {
    return state.dv
  },
  vdv(state) {
    return state.vdv
  },
  fund_1(state) {
    return state.fund_1
  },
  summary(state) {
    return state.summary
  }
}