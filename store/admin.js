export const state = () => ({
  brokers: {},
  users: {},
  add_user: {},
  edit_user: {}
});
export const mutations = {
  SET_BROKERS(state, brokers) {
    state.brokers = brokers;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_ADD_USER(state, add_user) {
    state.add_user = add_user;
  },
  SET_EDIT_USER(state, edit_user) {
    state.edit_user = edit_user;
  }
};
export const actions = {
  async GET_BROKERS({
    commit
  }) {
    const res = await this.$axios.get("/v1/admin/brokers/?");
    commit("SET_BROKERS", res.data[0]["data"]);
  },
  async GET_USERS({
    commit
  }) {
    const res = await this.$axios.get("/v1/admin/users/?");
    commit("SET_USERS", res.data[0]["data"]);
  },
  async ADD_USER({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/admin/create/users/?", id);
    commit("SET_ADD_USER", res.data[0]["data"]);
  },
  async EDIT_USER({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/admin/edit/users/?", id);
    commit("SET_EDIT_USER", res.data[0]["data"]);
  }
};

export const getters = {
  brokers(state) {
    return state.brokers;
  },
  users(state) {
    return state.users;
  },
  add_user(state) {
    return state.add_user;
  },
  edit_user(state) {
    return state.edit_user;
  }
};