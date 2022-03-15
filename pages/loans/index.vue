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
  data() {
    return {
    };
  },
  components: {
    LoanTable,
    LoanTabs
  },
  async fetch({ store, params }) {   
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>