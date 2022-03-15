<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-card-text>
      <StatementItems :all_statement_items="all_statement_items" :loan="loan"></StatementItems>
    </b-card-text>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import StatementItems from "@/components/Loan/Servicing/StatementItems";
import { mapGetters } from "vuex";
export default {
  props: [""],
  components: {
    ServicingLoanNav,
    StatementItems
  },
  async fetch({ store, params }) {
    await store.dispatch(
      "loan_servicing/GET_STATEMENT_ITEMS",
      params.statement_id
    );
  },
  computed: mapGetters({
    all_statement_items: "loan_servicing/all_statement_items"
  })
};
</script>

<style lang="scss" scoped>
</style>