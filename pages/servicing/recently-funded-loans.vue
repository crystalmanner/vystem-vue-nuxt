<template>
  <b-card title="Recently Funded Loans">
    <ServicingNav></ServicingNav>
    <RecentlyFundedLoanTable :recently_funded_loans='recently_funded_loans' :all_loans="all_loans"/>
  </b-card>
</template>
<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import RecentlyFundedLoanTable from "@/components/servicing/RecentlyFundedLoanTable";
import { mapGetters } from "vuex";
export default {
  components: {
    ServicingNav,
    RecentlyFundedLoanTable
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_RECENTLY_FUNDED_LOANS");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    recently_funded_loans: "servicing/recently_funded_loans",
    all_loans: "loans/all_loans"
  })
};
</script>
