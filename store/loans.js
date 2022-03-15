export const state = () => ({
  loan: {},
  all_loans: {},
  conversation: {},
  documents: {},
  recently_paid_off: {},
  recently_funded: {},
  loan_status: {}
});
export const mutations = {
  SET_LOAN(state, loan) {
    state.loan = loan;
  },
  SET_ALL_LOAN(state, all_loans) {
    state.all_loans = all_loans;
  },
  SET_CONVERSATION(state, conversation) {
    state.conversation = conversation;
  },
  SET_DOCUMENTS(state, documents) {
    state.documents = documents;
  },
  SET_RECENTLY_PAIDOFF(state, recently_paid_off) {
    state.recently_paid_off = recently_paid_off;
  },
  SET_RECENTLY_FUNDED(state, recently_funded) {
    state.recently_funded = recently_funded;
  },
  SET_LOAN_STATUS(state, loan_status) {
    state.loan_status = loan_status;
  }
};
export const actions = {
  async GET_LOAN({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/" + id);
    commit("SET_LOAN", res.data[0]["data"]);
  },
  async GET_ALL_LOAN({
    commit
  }) {
    const res = await this.$axios.get("/v1/loans/?");
    commit("SET_ALL_LOAN", res.data[0]["data"]);
  },
  async GET_CONVERSATION({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/header-conversation/" + id);
    commit("SET_CONVERSATION", res.data[0]["data"]);
  },
  async GET_DOCUMENTS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loans/documents/" + id);
    commit("SET_DOCUMENTS", res.data[0]["data"]);
  },
  async GET_RECENTLY_PAIDOFF({
    commit
  }) {
    const res = await this.$axios.get("/v1/loans/recently-paidoff/?");
    commit("SET_RECENTLY_PAIDOFF", res.data[0]["data"]);
  },
  async GET_RECENTLY_FUNDED({
    commit
  }) {
    const res = await this.$axios.get("/v1/loans/recently-funded/?");
    commit("SET_RECENTLY_FUNDED", res.data[0]["data"]);
  },
  async GET_LOAN_STATUS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/loan/status/" + id);
    commit("SET_LOAN_STATUS", res.data[0]["data"]);
  }
};

export const getters = {
  loan(state) {
    return state.loan;
  },
  all_loans(state) {
    return state.all_loans;
  },
  conversation(state) {
    return state.conversation;
  },
  documents(state) {
    return state.documents;
  },
  recently_paid_off(state) {
    return state.recently_paid_off;
  },
  recently_funded(state) {
    return state.recently_funded;
  },
  loan_status(state) {
    return state.loan_status;
  }
};