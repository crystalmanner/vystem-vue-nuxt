export const state = () => ({
  draw: {},
  request_draw: {},
  request_wire: {},
  approve_wire: {},
  get_draw_photos: {}
});
export const mutations = {
  SET_DRAW(state, draw) {
    state.draw = draw;
  },
  SET_DRAW_PHOTO(state, get_draw_photos) {
    state.get_draw_photos = get_draw_photos;
  }
};
export const actions = {
  async GET_DRAW({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/draws/" + id);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async PUT_DRAW({
    commit
  }, e) {
    const res = await this.$axios
      .put("/v1/draws/" + e.id, e)
      .then(function (res) {
        // handle success
        commit("SET_DRAW", res.data);
      });
  },
  async POST_REQUEST_DRAW({
    commit
  }, id) {
    const auth = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await this.$axios.post("/v1/draws/request-draw/", id, auth);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async POST_REQUEST_WIRE({
    commit
  }, id) {
    const auth = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await this.$axios.post("/v1/draws/request-wire/", id, auth);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async INSPECTION_UPLOAD({
    commit
  }, id) {
    const auth = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await this.$axios.post("/v1/draws/inspection/upload/", id, auth);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async SCOPE_UPLOAD({
    commit
  }, id) {
    const auth = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await this.$axios.post("/v1/draws/scope/upload/", id, auth);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async POST_APPROVE_WIRE({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/draws/approve/", id);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async POST_DRAW({
    commit
  }, id) {
    const res = await this.$axios.post("/v1/draws/create/", id);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async PHOTO_UPLOAD({
    commit
  }, id) {
    const auth = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    console.log(id, "aaa")
    const res = await this.$axios.post("/v1/draws/photo/upload/", id, auth);
    commit("SET_DRAW", res.data[0]["data"]);
  },
  async GET_DRAW_PHOTO({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/draws/photo/upload/" + id);
    commit("SET_DRAW_PHOTO", res.data[0]["data"]);
  },
};

export const getters = {
  draw(state) {
    return state.draw;
  },
  request_approval_queue: state => {
    return state.draws.filter(draw => draw.status === "Request Approval");
  },
  request_wire_queue: state => {
    return state.draws.filter(draw => draw.status === "Request Wire");
  },
  get_draw_photos(state) {
    return state.get_draw_photos;
  },
};