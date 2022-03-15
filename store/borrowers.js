export const state = () => ({
  all_borrower: {}
});

export const mutations = {
  SET_ALL_BORROWER(state, all_borrower) {
    state.all_borrower = all_borrower;
  }
};

export const actions = {
  async GET_ALL_BORROWER({ commit }) {
    const res = await this.$axios.get("/v1/borrowers/all/");
    commit("SET_ALL_BORROWER", res.data[0]["data"]);
  }
};

export const getters = {
  all_borrower(state) {
    return state.all_borrower;
  }
};
