export const state = () => ({
  loan: {},
  underwriting_photos: {}
});
export const mutations = {
  SET_LOAN(state, loan) {
    state.loan = loan;
  },
  SET_UNDERWRITING_PHOTO(state, underwriting_photos) {
    state.underwriting_photos = underwriting_photos;
  }
};
export const actions = {
  async GET_LOAN({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/" + id);
    commit("SET_LOAN", res.data[0]["data"]);
  },
  async GET_UNDERWRITING_PHOTO({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/underwriting/loans/photo/" + id);
    commit("SET_UNDERWRITING_PHOTO", res.data[0]["data"]);
  }
};

export const getters = {
  loan(state) {
    return state.loan;
  },
  underwriting_photos(state) {
    return state.underwriting_photos;
  }
};