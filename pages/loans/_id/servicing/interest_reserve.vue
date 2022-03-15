<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <div v-if="this.loan.loan_detail.interest_reserve != 0">
      <b-button variant="secondary" size="md" v-b-modal.add-interest-reserve>Apply Interest Reserve</b-button>
      <b-button variant="secondary" size="md" @click="pdf()">PDF</b-button>
      <TransactionForm @createItem="createItem" :loan="loan" :interest_reserve="interest_reserve"></TransactionForm>
    </div>
    <InterestReserve :interest_reserve="interest_reserve"></InterestReserve>
    <div id="summary" class="pull-right">
      <table class="table">
        <tr>
          <th>Total Interest Reserve:</th>
          <td>{{ interest_reserve.summary.beginning_balance | currency }}</td>
        </tr>
        <tr>
          <th>Total Withdrawls:</th>
          <td>{{ interest_reserve.summary.total_withdrawls | currency }}</td>
        </tr>
        <tr>
          <th>Remaining:</th>
          <td>{{ interest_reserve.summary.remaining | currency }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import InterestReserve from "@/components/Loan/Servicing/Transactions/InterestReserve.vue";
import TransactionForm from "@/components/Loan/Servicing/Transactions/AddInterestReserveForm.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    ServicingLoanNav,
    InterestReserve,
    TransactionForm
  },
  async fetch({ store, params }) {
    await store.dispatch("transaction/GET_INTEREST_RESERVE", params.id);
  },
  computed: mapGetters({
    interest_reserve: "transaction/interest_reserve",
    add_interest_reserve: "transaction/add_interest_reserve"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch("transaction/POST_ADD_INTEREST_RESERVE", {
        id: this.$route.params.id,
        form: e
      });
      await this.$store.dispatch(
        "transaction/GET_INTEREST_RESERVE",
        this.$route.params.id
      );
    },
    pdf() {
      this.$axios
        .get(
          `/v1/servicing/pdfs/loan-interest-reserve-pdf/loans/${
            this.$route.params.id
          }`
        )
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
