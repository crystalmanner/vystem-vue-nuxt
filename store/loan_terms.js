export const state = () => ({
  mod_terms: {},
  refi_terms: {},
  escrow_terms: {},
  auction_terms: {}
});
export const mutations = {
  SET_MODTERMS(state, mod_terms) {
    state.mod_terms = mod_terms;
  },
  SET_REFITERMS(state, refi_terms) {
    state.refi_terms = refi_terms;
  },
  SET_ESCROWTERMS(state, escrow_terms) {
    state.escrow_terms = escrow_terms;
  },
  SET_AUCTIONTERMS(state, auction_terms) {
    state.auction_terms = auction_terms;
  }
};
export const actions = {
  async GET_MODTERMS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/loan-terms/mod-terms/" + id);
    commit("SET_MODTERMS", res.data[0]["data"]);
  },
  async GET_REFITERMS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/loan-terms/refi-terms/" + id);
    commit("SET_REFITERMS", res.data[0]["data"]);
  },
  async GET_ESCROWTERMS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/loan-terms/escrow-terms/" + id);
    commit("SET_ESCROWTERMS", res.data[0]["data"]);
  },
  async GET_AUCTIONTERMS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/loan-terms/auction-terms/" + id);
    commit("SET_AUCTIONTERMS", res.data[0]["data"]);
  }
};

export const getters = {
  mod_terms(state) {
    return state.mod_terms;
  },
  refi_terms(state) {
    return state.refi_terms;
  },
  escrow_terms(state) {
    return state.escrow_terms;
  },
  auction_terms(state) {
    return state.auction_terms;
  }
};