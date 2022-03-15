export const state = () => ({
  pending_modifications: {},
  maturity_notice: {},
  monthly_invoices: {},
  recently_paid_off: {},
  sold_loan: {},
  funded_loans: {},
  reconciliation: {},
  insurance_expiration: {},
  recently_funded: {},
  recently_funded_loans: {},
  recently_closed: {},
  recently_paid_off: {},
  one_zero_nine_eight: {},
  draw_requests: {}
});
export const mutations = {
  SET_PENDING_MODIFICATIONS(state, pending_modifications) {
    state.pending_modifications = pending_modifications;
  },
  SET_MATURITY_NOTICE(state, maturity_notice) {
    state.maturity_notice = maturity_notice;
  },
  SET_MONTHLY_INVOICES(state, monthly_invoices) {
    state.monthly_invoices = monthly_invoices;
  },
  SET_RECENTLY_PAIDOFF(state, recently_paid_off) {
    state.recently_paid_off = recently_paid_off;
  },
  SET_SOLD_LOAN(state, sold_loan) {
    state.sold_loan = sold_loan;
  },
  SET_FUNDED_LOAN(state, funded_loans) {
    state.funded_loans = funded_loans;
  },
  SET_BLACKLIST(state, blacklist) {
    state.blacklist = blacklist;
  },
  SET_RECONCILIATION(state, reconciliation) {
    state.reconciliation = reconciliation;
  },
  SET_INSURANCE_EXPIRATION(state, insurance_expiration) {
    state.insurance_expiration = insurance_expiration;
  },
  SET_RECENTLY_FUNDED(state, recently_funded) {
    state.recently_funded = recently_funded;
  },
  SET_RECENTLY_FUNDED_LOANS(state, recently_funded_loans) {
    state.recently_funded_loans = recently_funded_loans;
  },
  SET_RECENTLY_CLOSED(state, recently_closed) {
    state.recently_closed = recently_closed;
  },
  SET_RECENTLY_PAID_OFF(state, recently_paid_off) {
    state.recently_paid_off = recently_paid_off;
  },
  SET_ONE_ZERO_NINE_EIGHT(state, one_zero_nine_eight) {
    state.one_zero_nine_eight = one_zero_nine_eight;
  },
  SET_DRAW_REQUESTS(state, draw_requests) {
    state.draw_requests = draw_requests;
  }
};
export const actions = {
  async GET_PENDING_MODIFICATIONS({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/pending-modification/?");
    commit("SET_PENDING_MODIFICATIONS", res.data[0]["data"]);
  },
  async GET_MATURITY_NOTICE({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/maturity-notice/?");
    commit("SET_MATURITY_NOTICE", res.data[0]["data"]);
  },
  async GET_MONTHLY_INVOICES({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/monthly-invoices/?");
    commit("SET_MONTHLY_INVOICES", res.data[0]["data"]);
  },
  async GET_RECENTLY_PAIDOFF({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/recently-paid-off/?");
    commit("SET_RECENTLY_PAIDOFF", res.data[0]["data"]);
  },
  async GET_SOLD_LOAN({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/sold-loan/?");
    commit("SET_SOLD_LOAN", res.data[0]["data"]);
  },
  async GET_FUNDED_LOAN({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/funded-loans/?");
    commit("SET_FUNDED_LOAN", res.data[0]["data"]);
  },
  async GET_BLACKLIST({
    commit
  }) {
    const res = await this.$axios.get("/v1/borrowers/blacklist/?");
    commit("SET_BLACKLIST", res.data[0]["data"]);
  },
  async GET_RECONCILIATION({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/reconciliation/?");
    commit("SET_RECONCILIATION", res.data[0]["data"]);
  },
  async GET_INSURANCE_EXPIRATION({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/insurance-expiration/?");
    commit("SET_INSURANCE_EXPIRATION", res.data[0]["data"])
  },
  async GET_RECENTLY_FUNDED({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/recently-funded/?");
    commit("SET_RECENTLY_FUNDED", res.data[0]["data"])
  },
  async GET_RECENTLY_FUNDED_LOANS({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/recently-funded-loans/?");
    commit("SET_RECENTLY_FUNDED_LOANS", res.data[0]["data"])
  },
  async GET_RECENTLY_CLOSED({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/recently-closed/?");
    commit("SET_RECENTLY_CLOSED", res.data[0]["data"])
  },
  async GET_RECENTLY_PAID_OFF({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/recently-paid-off/?");
    commit("SET_RECENTLY_PAID_OFF", res.data[0]["data"])
  },
  async GET_ONE_ZERO_NINE_EIGHT({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/1098s/?");
    commit("SET_ONE_ZERO_NINE_EIGHT", res.data[0]["data"])
  },
  async GET_DRAW_REQUESTS({
    commit
  }) {
    const res = await this.$axios.get("/v1/servicing/draw-requests/?");
    commit("SET_DRAW_REQUESTS", res.data[0]["data"])
  }
};

export const getters = {
  pending_modifications(state) {
    return state.pending_modifications;
  },
  maturity_notice(state) {
    return state.maturity_notice;
  },
  monthly_invoices(state) {
    return state.monthly_invoices;
  },
  recently_paid_off(state) {
    return state.recently_paid_off;
  },
  sold_loan(state) {
    return state.sold_loan;
  },
  funded_loans(state) {
    return state.funded_loans;
  },
  blacklist(state) {
    return state.blacklist;
  },
  reconciliation(state) {
    return state.reconciliation;
  },
  insurance_expiration(state) {
    return state.insurance_expiration;
  },
  recently_funded(state) {
    return state.recently_funded;
  },
  recently_funded_loans(state) {
    return state.recently_funded_loans;
  },
  recently_closed(state) {
    return state.recently_closed;
  },
  recently_paid_off(state) {
    return state.recently_paid_off;
  },
  one_zero_nine_eight(state) {
    return state.one_zero_nine_eight;
  },
  draw_requests(state) {
    return state.draw_requests;
  }
};