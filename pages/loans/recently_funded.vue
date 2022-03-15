<template>
  <b-card>
    <LoanTabs></LoanTabs>
    <b-card-text>
      <strong>
        <LoanTable :all_loans="all_loans"></LoanTable>
      </strong>
    </b-card-text>
  </b-card>
</template>
<script>
import LoanTabs from "@/components/Loan/LoanTabs.vue";
import LoanTable from "@/components/Loan/LoanTable";
import { mapGetters } from "vuex";
export default {
  components: {
    LoanTable,
    LoanTabs
  },
  async fetch({ store, params }) {
    await store.dispatch("loans/GET_RECENTLY_FUNDED");
  },
  computed: mapGetters({
    all_loans: "loans/recently_funded"
  })
};
</script>

<style lang="scss" scoped>
</style>