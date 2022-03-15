<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-row>
      <b-col>
        <b-card title="Quick Stats">
          <hr>
          <b-card-text>
            <b-row>
              <b-col>
                <div class="amount" v-if="this.note_balance == ''">$0</div>
                <div class="amount" v-else>{{this.note_balance | currency }}</div>
                <div class="labels">Remaining Principal</div>
              </b-col>
              <b-col>
                <div class="amount" v-if="this.holdback_balance == ''">$0</div>
                <div class="amount">{{this.holdback_balance | currency}}</div>
                <div class="labels">Remaining Holdback</div>
              </b-col>
              <b-col>
                <div class="amount" v-if="this.ir_balance == ''">$0</div>
                <div class="amount">{{this.ir_balance | currency}}</div>
                <div class="labels">Remaining IR</div>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
        <b-card title="Recent Payments">
          <b-card-text>
            <table class="table">
              <thead>
                <th>Transaction ID</th>
                <th>Transaction Date</th>
                <th>Note</th>
                <th>Amount</th>
              </thead>
              <tbody>
                <tr v-for="row in last_general_ledger" :key="row.id">
                  <td>
                    <nuxt-link
                      :to="`/loans/${loan_id}/servicing/receive-payment/previous_payments/${row.id}`"
                    >{{row.id}}</nuxt-link>
                  </td>
                  <td>{{row.transaction_date}}</td>
                  <td>{{row.note}}</td>
                  <td>{{row.amount | currency }}</td>
                </tr>
              </tbody>
            </table>
          </b-card-text>
        </b-card>
        <b-card title="Recent Draws">
          <b-card-text>
            <table class="table">
              <thead>
                <th>Note</th>
                <th>Transaction Date</th>
                <th>Amount</th>
              </thead>
              <tbody>
                <tr v-for="row in last_draw" :key="row.id">
                  <td>
                    <nuxt-link :to="`/loans/${loan_id}/draws/${row.id}`">{{row.note}}</nuxt-link>
                  </td>
                  <td>{{row.transaction_date}}</td>
                  <td>{{row.amount | currency }}</td>
                </tr>
              </tbody>
            </table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card title="Actions">
          <b-card-text>
            <b-button
              variant="secondary"
              size="md"
              block
              :to="`/loans/${$route.params.id}/servicing/mod`"
            >Mod Loan</b-button>
            <b-button
              variant="secondary"
              size="md"
              block
              :to="`/loans/${$route.params.id}/servicing/payoff`"
            >Generate Payoff Statement</b-button>
            <b-button
              variant="secondary"
              size="md"
              block
              :to="`/loans/${$route.params.id}/servicing/refinance`"
            >Internal Refinance</b-button>
            <b-button
              variant="secondary"
              size="md"
              :to="`/loans/${$route.params.id}/servicing/payoff`"
              block
            >Payoff Loan</b-button>
            <b-button
              variant="secondary"
              size="md"
              block
              @click="generate_payment"
            >Generate Payment Coupons</b-button>
            <b-button variant="secondary" size="md" @click="applyballoon" block>Apply Balloon</b-button>
            <b-button variant="secondary" size="md" @click="placeindefault" block>Place in default</b-button>
            <b-button
              variant="secondary"
              size="md"
              @click="placeinforeclosure"
              block
            >Place in Foreclosure</b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: { ServicingLoanNav },
  data() {
    return {
      note_balance: "",
      ir_balance: "",
      holdback_balance: ""
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("transaction/LAST_DRAW", params.id);
    await store.dispatch("transaction/LAST_GENERAL_LEDGER", params.id);
  },
  computed: mapGetters({
    last_draw: "transaction/last_draw",
    last_general_ledger: "transaction/last_general_ledger"
  }),
  created() {
    this.$axios
      .get(`/v1/servicing/payoff/sum/` + this.$route.params.id)
      .then(response => {
        this.note_balance = response.data[0].data.general_ledger;
        this.ir_balance = response.data[0].data.interest_reserve;
        this.holdback_balance = response.data[0].data.loan_holdback;
      });
    this.loan_id = this.$route.params.id;
  },
  methods: {
    generate_payment() {
      this.$axios
        .get(
          `/v1/servicing/pdfs/borrower-payment-pdf/loans/${
            this.$route.params.id
          }`
        )
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    applyballoon: function() {
      this.$axios
        .get("/v1/servicing/apply-balloon/" + this.loan_id)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    },
    placeindefault: function() {
      this.$axios
        .get("/v1/servicing/default/" + this.loan_id)
        .then(response => {
          this.documents = response.data[0]["data"];
        })
        .catch(error => {
          console.log(error);
        });
    },
    placeinforeclosure: function() {
      this.$axios
        .get("/v1/servicing/foreclosure/" + this.loan_id)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.amount {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -1px;
}
.labels {
  font-size: 14px;
  color: #b4b4b4;
  top: -7px;
  position: relative;
}
</style>