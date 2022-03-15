export const state = () => ({
  mailing_address: {},
  email_statement: {},
  invoices: {},
  add_mailing_address: {},
  add_email_statement: {},
  add_payoff_statement: {},
  all_loan_extensions: {},
  add_loan_extension: {},
  payment_reference: {},
  add_payment_reference: {},
  payment_reference_item: {},
  add_payment_reference_item: {},
  payoff_request: {},
  all_statements: {},
  add_statement: {},
  all_statement_items: {},
  interest_rates: {},
  add_interest_rate: {},
  mods: {}

});
export const mutations = {
  SET_MAILING_ADDRESS(state, mailing_address) {
    state.mailing_address = mailing_address;
  },
  SET_EMAIL_STATEMENT(state, email_statement) {
    state.email_statement = email_statement;
  },
  SET_INVOICE(state, invoices) {
    state.invoices = invoices;
  },
  SET_ADD_MAILING_ADDRESS(state, add_mailing_address) {
    state.add_mailing_address = add_mailing_address;
  },
  SET_ADD_EMAIL_STATEMENT(state, add_email_statement) {
    state.add_email_statement = add_email_statement;
  },
  SET_PAYOFF_STATEMENT(state, add_payoff_statement) {
    state.add_payoff_statement = add_payoff_statement;
  },
  SET_LOAN_EXTENSIONS(state, all_loan_extensions) {
    state.all_loan_extensions = all_loan_extensions;
  },
  SET_ADD_LOAN_EXTENSION(state, add_loan_extension) {
    state.add_loan_extension = add_loan_extension;
  },
  SET_PAYMENT_REFERENCE(state, payment_reference) {
    state.payment_reference = payment_reference;
  },
  SET_PAYMENT_REFERENCE_ITEM(state, payment_reference_item) {
    state.payment_reference_item = payment_reference_item;
  },
  SET_ADD_PAYMENT_REFERENCE(state, add_payment_reference) {
    state.add_payment_reference = add_payment_reference;
  },
  SET_ADD_PAYMENT_REFERENCE_ITEM(state, add_payment_reference_item) {
    state.add_payment_reference_item = add_payment_reference_item;
  },
  SET_PAYOFF_REQUEST(state, payoff_request) {
    state.payoff_request = payoff_request;
  },
  SET_STATEMENTS(state, all_statements) {
    state.all_statements = all_statements;
  },
  SET_ADD_STATEMENT(state, add_statement) {
    state.add_statement = add_statement;
  },
  SET_STATEMENT_ITEMS(state, all_statement_items) {
    state.all_statement_items = all_statement_items;
  },
  SET_INTEREST_RATES(state, interest_rates) {
    state.interest_rates = interest_rates;
  },
  SET_ADD_INTEREST_RATE(state, add_interest_rate) {
    state.add_interest_rate = add_interest_rate;
  },
  SET_MODS(state, mods) {
    state.mods = mods;
  }
};
export const actions = {
  async GET_MAILING_ADDRESS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/invoice_preferences/mailing_address/" + id);
    commit("SET_MAILING_ADDRESS", res.data[0]["data"]);
  },
  async GET_EMAIL_STATEMENT({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/invoice_preferences/email_statement/" + id);
    commit("SET_EMAIL_STATEMENT", res.data[0]["data"]);
  },
  async GET_INVOICE({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/invoices_payments/" + id);
    commit("SET_INVOICE", res.data[0]["data"]);
  },
  async POST_ADD_MAILING_ADDRESS({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/invoice_preferences/add/mailing_address/", id);
    commit("SET_ADD_MAILING_ADDRESS", res.data[0]["data"]);
  },
  async POST_ADD_EMAIL_STATEMENT({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/invoice_preferences/add/email_statement/", id);
    commit("SET_ADD_EMAIL_STATEMENT", res.data[0]["data"]);
  },
  async ADD_PAYOFF_STATEMENT({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/pdfs/payoff-pdf/loans/", id);
    commit("SET_PAYOFF_STATEMENT", res.data[0]["data"]);
  },
  async GET_LOAN_EXTENSIONS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/extensions/" + id);
    commit("SET_LOAN_EXTENSIONS", res.data[0]["data"]);
  },
  async ADD_LOAN_EXTENSION({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/extensions/", id);
    commit("SET_ADD_LOAN_EXTENSION", res.data[0]["data"]);
  },
  async GET_PAYMENT_REFERENCE({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/payment_reference/" + id);
    commit("SET_PAYMENT_REFERENCE", res.data[0]["data"]);
  },
  async GET_PAYMENT_REFERENCE_ITEM({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/payment_reference_item/" + id);
    commit("SET_PAYMENT_REFERENCE_ITEM", res.data[0]["data"]);
  },
  async POST_ADD_PAYMENT_REFERENCE({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/payment_reference/add/", id);
    commit("SET_ADD_PAYMENT_REFERENCE", res.data[0]["data"]);
  },
  async POST_ADD_PAYMENT_REFERENCE_ITEM({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/payment_reference_item/add/", id);
    commit("SET_ADD_PAYMENT_REFERENCE", res.data[0]["data"]);
  },
  async GET_PAYOFF_REQUEST({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/payoff-request/" + id);
    commit("SET_PAYOFF_REQUEST", res.data[0]["data"]);
  },
  async GET_STATEMENTS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/statements/statement/" + id);
    commit("SET_STATEMENTS", res.data[0]["data"]);
  },
  async ADD_STATEMENT({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/statements/statement/add/", id);
    commit("SET_ADD_STATEMENT", res.data[0]["data"]);
  },
  async GET_STATEMENT_ITEMS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/statements/statement_items/" + id);
    commit("SET_STATEMENT_ITEMS", res.data[0]["data"]);
  },
  async GET_INTEREST_RATES({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/loan_interest_rates/" + id);
    commit("SET_INTEREST_RATES", res.data[0]["data"]);
  },
  async ADD_INTEREST_RATE({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/loan_interest_rate/add/", id);
    commit("SET_ADD_INTEREST_RATE", res.data[0]["data"]);
  },
  async GET_MODS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/mod/" + id);
    commit("SET_MODS", res.data[0]["data"]);
  }
};

export const getters = {
  mailing_address(state) {
    return state.mailing_address;
  },
  email_statement(state) {
    return state.email_statement;
  },
  invoices(state) {
    return state.invoices;
  },
  add_mailing_address(state) {
    return state.add_mailing_address;
  },
  add_email_statement(state) {
    return state.add_email_statement;
  },
  add_payoff_statement(state) {
    return state.add_payoff_statement;
  },
  all_loan_extensions(state) {
    return state.all_loan_extensions;
  },
  add_loan_extension(state) {
    return state.add_loan_extension;
  },
  payment_reference(state) {
    return state.payment_reference;
  },
  payment_reference_item(state) {
    return state.payment_reference_item;
  },
  add_payment_reference(state) {
    return state.add_payment_reference;
  },
  add_payment_reference_item(state) {
    return state.add_payment_reference_item;
  },
  payoff_request(state) {
    return state.payoff_request;
  },
  all_statements(state) {
    return state.all_statements;
  },
  add_statement(state) {
    return state.add_statement;
  },
  all_statement_items(state) {
    return state.all_statement_items;
  },
  interest_rates(state) {
    return state.interest_rates;
  },
  add_interest_rate(state) {
    return state.add_interest_rate;
  },
  mods(state) {
    return state.mods;
  }
};