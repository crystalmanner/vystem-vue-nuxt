export const state = () => ({
  borrower: {},
  borrower_notes: {}
});
export const mutations = {
  SET_BORROWER(state, borrower) {
    state.borrower = borrower;
  },
  SET_BORROWER_NOTES(state, borrower_notes) {
    state.borrower_notes = borrower_notes;
  }
};
export const actions = {
  async GET_BORROWER({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/borrowers/" + id);
    commit("SET_BORROWER", res.data[0]["data"]);
  },
  async GET_BORROWER_NOTES({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/borrower-notes/" + id);
    commit("SET_BORROWER_NOTES", res.data[0]["data"]);
  }
};

export const getters = {
  borrower(state) {
    return state.borrower;
  },
  borrower_notes(state) {
    return state.borrower_notes;
  }
};