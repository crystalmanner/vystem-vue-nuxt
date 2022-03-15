export const state = () => ({
  constants: {
    fee_types: [{
        value: "Admin Fee",
        text: "Admin Fee"
      },
      // { value: "Cash In", text: "Cash In" },
      // { value: "Down Payment", text: "Down Payment" },
      {
        value: "Draw Fee",
        text: "Draw Fee"
      },
      // { value: "Escrow Deposit", text: "Escrow Deposit" },
      // { value: "Extension", text: "Extension" },
      {
        value: "Force Placed Ins Fee",
        text: "Force Placed Ins Fee"
      },
      {
        value: "Foreclosure Costs",
        text: "Foreclosure Costs"
      },
      {
        value: "Foreclosure Fee",
        text: "Foreclosure Fee"
      },
      // { value: "Holdback", text: "Holdback" },
      {
        value: "Insurance",
        text: "Insurance"
      },
      {
        value: "Interest",
        text: "Interest"
      },
      // { value: "Interest Reserve", text: "Interest Reserve" },
      {
        value: "Legal Fee",
        text: "Legal Fee"
      },
      {
        value: "Payoff Fee",
        text: "Payoff Fee"
      },
      {
        value: "Origination Fee",
        text: "Origination Fee"
      },
      {
        value: "Processing Fee",
        text: "Processing Fee"
      },
      {
        value: "Reconveyance Fee",
        text: "Reconveyance Fee"
      },
      {
        value: "Recording Fee",
        text: "Recording Fee"
      },
      {
        value: "Sheriff Refund",
        text: "Sheriff Refund"
      },
      {
        value: "Trustee Refund",
        text: "Trustee Refund"
      }
    ],
    get_roles: [{
      value: "Sales",
      text: "Sales"
    }, {
      value: "Valuation",
      text: "Valuation"
    }, {
      value: "Construction",
      text: "Construction"
    }, {
      value: "Underwriting",
      text: "Underwriting"
    }, {
      value: "Processing",
      text: "Processing"
    }],
    get_role_homepage: [{
        value: "Open Items Servicing",
        text: "Open Items Servicing"
      },
      {
        value: "Pipeline",
        text: "Pipeline"
      },
      {
        value: "Escrow",
        text: "Escrow"
      },
      {
        value: "Open Items Processing",
        text: "Open Items Processing"
      },
      {
        value: "Open Items Construction",
        text: "Open Items Construction"
      },
      {
        value: "Open Items Sales",
        text: "Open Items Sales"
      },
      {
        value: "Open Items Underwriting",
        text: "Open Items Underwriting"
      },
      {
        value: "Open Items Valuation",
        text: "Open Items Valuation"
      },
      {
        value: "Auction Money Out",
        text: "Auction Money Out"
      },
      {
        value: "Website",
        text: "Website"
      }
    ],
    get_role_conversation: [{
        value: "Accounting",
        text: "Accounting"
      },
      {
        value: "Auction",
        text: "Auction"
      }, {
        value: "Client",
        text: "Client"
      }, {
        value: "Construction",
        text: "Construction"
      }, {
        value: "Escrow",
        text: "Escrow"
      }, {
        value: "Processing",
        text: "Processing"
      }, {
        value: "Sales",
        text: "Sales"
      }, {
        value: "Servicing",
        text: "Servicing"
      }, {
        value: "Valuation",
        text: "Valuation"
      }, {
        value: "Master",
        text: "Master"
      }, {
        value: "Admin",
        text: "Admin"
      }
    ]
  }
});

export const mutations = {
  SET_CONSTANTS(state, constants) {
    state.constants = constants;
  }
};
export const actions = {
  async GET_CONSTANTS({
    commit
  }) {
    const res = await this.$axios.get("/v1/constants/");
    commit("SET_CONSTANTS", res.data);
  }
};

export const getters = {
  get(state) {
    return state.constants;
  },
  getFeeTypes(state) {
    return state.constants.fee_types;
  },
  getRoles(state) {
    return state.constants.get_roles;
  },
  getRoleHomepage(state) {
    return state.constants.get_role_homepage;
  },
  getRoleConversation(state) {
    return state.constants.get_role_conversation;
  }
};