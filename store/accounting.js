export const state = () => ({
  recently_paid_off: {},
  draw_wire_requests: {},
  escrow_wire_request: {},
  escrow_wire_request_detail: {},
  commission: {},
  forecasting: {},
  uploaded_documents: {},
  insurance_documents: {},
  outgoing_wire: {}
});

export const mutations = {
  SET_RECENTLY_PAID_OFF(state, recently_paid_off) {
    state.recently_paid_off = recently_paid_off;
  },
  SET_DRAW_WIRE_REQUEST(state, draw_wire_requests) {
    state.draw_wire_requests = draw_wire_requests;
  },
  SET_ESCROW_WIRE_REQUEST(state, escrow_wire_request) {
    state.escrow_wire_request = escrow_wire_request;
  },
  SET_ESCROW_WIRE_REQUEST_DETAIL(state, escrow_wire_request_detail) {
    state.escrow_wire_request_detail = escrow_wire_request_detail;
  },
  SET_COMMISSION(state, commission) {
    state.commission = commission;
  },
  SET_FORECASTING(state, forecasting) {
    state.forecasting = forecasting;
  },
  SET_UPLOADED_DOCUMENTS(state, uploaded_documents) {
    state.uploaded_documents = uploaded_documents;
  },
  SET_INSURANCE_DOCUMENTS(state, insurance_documents) {
    state.insurance_documents = insurance_documents;
  },
  SET_OUTGOING_WIRE(state, outgoing_wire) {
    state.outgoing_wire = outgoing_wire;
  }
};

export const actions = {
  async GET_RECENTLY_PAID_OFF({
    commit
  }) {
    const res = await this.$axios.get("/v1/accounting/recently-paid-off/?");
    commit("SET_RECENTLY_PAID_OFF", res.data[0]["data"]);
  },
  async GET_DRAW_WIRE_REQUEST({
    commit
  }) {
    const res = await this.$axios.get("/v1/accounting/draws/?");
    commit("SET_DRAW_WIRE_REQUEST", res.data[0]["data"]);
  },
  async GET_ESCROW_WIRE_REQUEST({
    commit
  }) {
    const res = await this.$axios.get("/v1/accounting/wire-requests/?");
    commit("SET_ESCROW_WIRE_REQUEST", res.data[0]["data"]);
  },
  async GET_ESCROW_WIRE_REQUEST_DETAIL({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/accounting/wire-requests-detail/" + id);
    commit("SET_ESCROW_WIRE_REQUEST_DETAIL", res.data[0]["data"]);
  },
  async GET_COMMISSION({
    commit
  }) {
    const res = await this.$axios.get("/v1/accounting/commission/?");
    commit("SET_COMMISSION", res.data[0]["data"]);
  },
  async GET_FORECASTING({
    commit
  }) {
    const res = await this.$axios.get("/v1/accounting/forecasting/?");
    commit("SET_FORECASTING", res.data[0]["data"]);
  },
  async GET_UPLOADED_DOCUMENTS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/accounting/wire-requests-detail/uploaded-documents/" + id);
    commit("SET_UPLOADED_DOCUMENTS", res.data[0]["data"]);
  },
  async GET_INSURANCE_DOCUMENTS({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/accounting/wire-requests-detail/insurance-documents/" + id);
    commit("SET_INSURANCE_DOCUMENTS", res.data[0]["data"]);
  },
  async GET_OUTGOING_WIRE({
    commit
  }, id) {
    const res = await this.$axios.get("/v1/accounting/wire-requests-detail/outgoing-wire/" + id);
    commit("SET_OUTGOING_WIRE", res.data[0]["data"]);
  }
};

export const getters = {
  get_recently_paid_off(state) {
    return state.recently_paid_off;
  },
  draw_wire_requests(state) {
    return state.draw_wire_requests;
  },
  escrow_wire_request(state) {
    return state.escrow_wire_request;
  },
  escrow_wire_request_detail(state) {
    return state.escrow_wire_request_detail;
  },
  commission(state) {
    return state.commission;
  },
  forecasting(state) {
    return state.forecasting;
  },
  uploaded_documents(state) {
    return state.uploaded_documents;
  },
  insurance_documents(state) {
    return state.insurance_documents;
  },
  outgoing_wire(state) {
    return state.outgoing_wire;
  }
};