export const state = () => ({
  entity: {}
});
export const mutations = {
  SET_ENTITY(state, entity) {
    state.entity = entity;
  }
};
export const actions = {
  async GET_ENTITY({ commit }, id) {
    const res = await this.$axios.get("/v1/entities/" + id);
    commit("SET_ENTITY", res.data[0]["data"]);
  }
};

export const getters = {
  entity(state) {
    return state.entity;
  }
};
