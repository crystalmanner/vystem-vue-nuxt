export const state = () => ({
  all_credit: {},
  all_sales: {},
  all_valuation: {},
  all_construction: {},
  all_underwriting: {},
  all_processing: {},
  all_loa: {},
  all_manager: {}
});
export const mutations = {
  SET_ALL_CREDIT(state, all_credit) {
    state.all_credit = all_credit;
  },
  SET_ALL_SALES(state, all_sales) {
    state.all_sales = all_sales;
  },
  SET_ALL_VALUATION(state, all_valuation) {
    state.all_valuation = all_valuation;
  },
  SET_ALL_CONSTRUCTION(state, all_construction) {
    state.all_construction = all_construction;
  },
  SET_ALL_UNDERWRITING(state, all_underwriting) {
    state.all_underwriting = all_underwriting;
  },
  SET_ALL_PROCESSING(state, all_processing) {
    state.all_processing = all_processing;
  },
  SET_ALL_LOA(state, all_loa) {
    state.all_loa = all_loa;
  },
  SET_ALL_MANAGER(state, all_manager) {
    state.all_manager = all_manager;
  }
};
export const actions = {
  async GET_ALL_CREDIT({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/credit/?");
    commit("SET_ALL_CREDIT", res.data[0]["data"]);
  },
  async GET_ALL_SALES({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/sales/?");
    commit("SET_ALL_SALES", res.data[0]["data"]);
  },
  async GET_ALL_VALUATION({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/valuation/?");
    commit("SET_ALL_VALUATION", res.data[0]["data"]);
  },
  async GET_ALL_CONSTRUCTION({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/construction/?");
    commit("SET_ALL_CONSTRUCTION", res.data[0]["data"]);
  },
  async GET_ALL_UNDERWRITING({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/underwriting/?");
    commit("SET_ALL_UNDERWRITING", res.data[0]["data"]);
  },
  async GET_ALL_PROCESSING({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/processing/?");
    commit("SET_ALL_PROCESSING", res.data[0]["data"]);
  },
  async GET_ALL_LOA({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/loa/?");
    commit("SET_ALL_LOA", res.data[0]["data"]);
  },
  async GET_ALL_MANAGER({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/dashboard/manager/?");
    commit("SET_ALL_MANAGER", res.data[0]["data"]);
  }
};

export const getters = {
  all_credit(state) {
    return state.all_credit;
  },
  all_sales(state) {
    return state.all_sales;
  },
  all_valuation(state) {
    return state.all_valuation;
  },
  all_construction(state) {
    return state.all_construction;
  },
  all_underwriting(state) {
    return state.all_underwriting;
  },
  all_processing(state) {
    return state.all_processing;
  },
  all_loa(state) {
    return state.all_loa;
  },
  all_manager(state) {
    return state.all_manager;
  }
};