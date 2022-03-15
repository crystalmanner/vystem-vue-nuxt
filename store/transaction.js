export const state = () => ({
  general_ledger: {},
  draws: {},
  interest_reserve: {},
  holding_charge: {},
  add_general_ledger: {},
  put_general_ledger: {},
  delete_general_ledger: {},
  last_general_ledger: {},
  add_draw: {},
  add_credit: {},
  put_draw: {},
  delete_draw: {},
  last_draw: {},
  add_interest_reserve: {},
  put_interest_reserve: {},
  delete_interest_reserve: {},
  add_holding_charge: {},
  put_holding_charge: {},
  delete_holding_charge: {},
  all_draws: {}
});

export const mutations = {
  SET_GENERAL_LEDGER(state, general_ledger) {
    state.general_ledger = general_ledger;
  },
  SET_DRAWS(state, draws) {
    state.draws = draws;
  },
  SET_INTEREST_RESERVE(state, interest_reserve) {
    state.interest_reserve = interest_reserve;
  },
  SET_HOLDING_CHARGE(state, holding_charge) {
    state.holding_charge = holding_charge;
  },
  SET_ADD_GENERAL_LEDGER(state, add_general_ledger) {
    state.add_general_ledger = add_general_ledger;
  },
  SET_PUT_GENERAL_LEDGER(state, put_general_ledger) {
    state.put_general_ledger = put_general_ledger;
  },
  SET_DELETE_GENERAL_LEDGER(state, delete_general_ledger) {
    state.delete_general_ledger = delete_general_ledger;
  },
  SET_LAST_GENERAL_LEDGER(state, last_general_ledger) {
    state.last_general_ledger = last_general_ledger;
  },
  SET_ADD_DRAW(state, add_draw) {
    state.add_draw = add_draw;
  },
  SET_ADD_CREDIT(state, add_credit){
    state.add_credit = add_credit;
  },
  SET_PUT_DRAW(state, put_draw) {
    state.put_draw = put_draw;
  },
  SET_DELETE_DRAW(state, delete_draw) {
    state.delete_draw = delete_draw;
  },
  SET_LAST_DRAW(state, last_draw) {
    state.last_draw = last_draw;
  },
  SET_ADD_INTEREST_RESERVE(state, add_interest_reserve) {
    state.add_interest_reserve = add_interest_reserve;
  },
  SET_PUT_INTEREST_RESERVE(state, put_interest_reserve) {
    state.put_interest_reserve = put_interest_reserve;
  },
  SET_DELETE_INTEREST_RESERVE(state, delete_interest_reserve) {
    state.delete_interest_reserve = delete_interest_reserve;
  },
  SET_ADD_HOLDING_CHARGE(state, add_holding_charge) {
    state.add_holding_charge = add_holding_charge;
  },
  SET_PUT_HOLDING_CHARGE(state, put_holding_charge) {
    state.put_holding_charge = put_holding_charge;
  },
  SET_DELETE_HOLDING_CHARGE(state, delete_holding_charge) {
    state.delete_holding_charge = delete_holding_charge;
  },
  SET_ALL_DRAWS(state, all_draws) {
    state.all_draws = all_draws;
  },
};

export const actions = {
  async GET_GENERAL_LEDGER({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/general_ledger/" + id);
    commit("SET_GENERAL_LEDGER", res.data[0]["data"]);
  },
  async GET_DRAWS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/draws/" + id);
    commit("SET_DRAWS", res.data[0]["data"]);
  },
  async GET_INTEREST_RESERVE({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/interest_reserve/" + id);
    commit("SET_INTEREST_RESERVE", res.data[0]["data"]);
  },
  async GET_HOLDING_CHARGE({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/holding_charge/" + id);
    commit("SET_HOLDING_CHARGE", res.data[0]["data"]);
  },
  async POST_ADD_GENERAL_LEDGER({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/transaction/loan_general_ledger/create/", id);
    commit("SET_ADD_GENERAL_LEDGER", res.data[0]["data"]);
  },
  async PUT_GENERAL_LEDGER({
    commit
  }, id) {
    const res = await this.$axios.put("/v1/servicing/transaction/loan_general_ledger/update/", id);
    commit("SET_PUT_GENERAL_LEDGER", res.data[0]["data"]);
  },
  async DELETE_GENERAL_LEDGER({
    commit
  }, id) {
    const res = await this.$axios.delete("/v1/servicing/transaction/loan_general_ledger/delete/" + id);
    commit("SET_DELETE_GENERAL_LEDGER", res.data[0]["data"]);
  },
  async LAST_GENERAL_LEDGER({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/last/general_ledger/" + id);
    commit("SET_LAST_GENERAL_LEDGER", res.data[0]["data"]);
  },
  async POST_ADD_DRAW({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/transaction/loan_draw/create/", id);
    commit("SET_ADD_DRAW", res.data[0]["data"]);
  },
  async POST_ADD_CREDIT({
    commit
  }, id){
    const res =  await this.$axios.post("v1/servicing/credit/", id);
    commit("SET_ADD_CREDIT", res.data[0]["data"]);
  },
  async PUT_DRAW({
    commit
  }, id) {
    const res = await this.$axios.put("/v1/servicing/transaction/loan_draw/update/", id);
    commit("SET_PUT_DRAW", res.data[0]["data"]);
  },
  async DELETE_DRAW({
    commit
  }, id) {
    const res = await this.$axios.delete("/v1/servicing/transaction/loan_draw/delete/" + id);
    commit("SET_DELETE_DRAW", res.data[0]["data"]);
  },
  async LAST_DRAW({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/servicing/transaction/last/draws/" + id);
    commit("SET_LAST_DRAW", res.data[0]["data"]);
  },
  async POST_ADD_INTEREST_RESERVE({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/transaction/loan_interest_reserve/create/", id);
    commit("SET_ADD_INTEREST_RESERVE", res.data[0]["data"]);
  },
  async PUT_INTEREST_RESERVE({
    commit
  }, id) {
    const res = await this.$axios.put("/v1/servicing/transaction/loan_interest_reserve/update/", id);
    commit("SET_PUT_INTEREST_RESERVE", res.data[0]["data"]);
  },
  async DELETE_INTEREST_RESERVE({
    commit
  }, id) {
    const res = await this.$axios.delete("/v1/servicing/transaction/loan_interest_reserve/delete/" + id);
    commit("SET_DELETE_INTEREST_RESERVE", res.data[0]["data"]);
  },
  async POST_ADD_HOLDING_CHARGE({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/servicing/transaction/loan_holding_charge/create/", id);
    commit("SET_ADD_HOLDING_CHARGE", res.data[0]["data"]);
  },
  async PUT_HOLDING_CHARGE({
    commit
  }, id) {
    const res = await this.$axios.put("/v1/servicing/transaction/loan_holding_charge/update/", id);
    commit("SET_PUT_HOLDING_CHARGE", res.data[0]["data"]);
  },
  async DELETE_HOLDING_CHARGE({
    commit
  }, id) {
    const res = await this.$axios.delete("/v1/servicing/transaction/loan_holding_charge/delete/" + id);
    commit("SET_DELETE_HOLDING_CHARGE", res.data[0]["data"]);
  },
  async GET_ALL_DRAWS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/draws/?");
    commit("SET_ALL_DRAWS", res.data[0]["data"]);
  }
};

export const getters = {
  general_ledger(state) {
    return state.general_ledger;
  },
  draws(state) {
    return state.draws;
  },
  interest_reserve(state) {
    return state.interest_reserve;
  },
  holding_charge(state) {
    return state.holding_charge;
  },
  add_general_ledger(state) {
    return state.add_general_ledger;
  },
  put_general_ledger(state) {
    return state.put_general_ledger;
  },
  delete_general_ledger(state) {
    return state.delete_general_ledger;
  },
  last_general_ledger(state) {
    return state.last_general_ledger;
  },
  add_draw(state) {
    return state.add_draw;
  },
  add_credit(state) {
    return state.add_credit;
  },
  put_draw(state) {
    return state.put_draw;
  },
  delete_draw(state) {
    return state.delete_draw;
  },
  last_draw(state) {
    return state.last_draw;
  },
  add_interest_reserve(state) {
    return state.add_interest_reserve;
  },
  put_interest_reserve(state) {
    return state.put_interest_reserve;
  },
  delete_interest_reserve(state) {
    return state.delete_interest_reserve;
  },
  add_holding_charge(state) {
    return state.add_holding_charge;
  },
  put_holding_charge(state) {
    return state.put_holding_charge;
  },
  delete_holding_charge(state) {
    return state.delete_holding_charge;
  },
  all_draws(state) {
    return state.all_draws;
  }
};