export const state = () => ({
  draws: []
});

export const mutations = {
  SET_DRAWS(state, draws) {
    state.draws = draws;
  }
};

export const actions = {
  async GET_DRAWS_QUEUE({ commit }) {
    const res = await this.$axios.get("/v1/draws/?");
    commit("SET_DRAWS", res.data[0]["data"]);
  },
  async GET_DRAWS({ commit }) {
    const res = await this.$axios.get("/v1/draws");
    commit("SET_DRAWS", res.data[0]["data"]);
  }
};

export const getters = {
  list(state) {
    return state.draws;
  },
  // Alias of list
  get_queue(state) {
    return state.draws;
  }
};
