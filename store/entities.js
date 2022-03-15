export const state = () => ({
  entities: {}
});

export const mutations = {
  SET_ALL_ENTITIES(state, entities) {
    state.entities = entities;
  }
};

export const actions = {
  async GET_ALL_ENTITY({ commit }) {
    const res = await this.$axios.get("/v1/entities/");
    commit("SET_ALL_ENTITIES", res.data[0]["data"]);
  }
};

export const getters = {
  all_entities(state) {
    return state.entities;
  }
};
