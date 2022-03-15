<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>		
    <PayoffNav></PayoffNav>
    <b-row>
      <PayoffRequest :payoff_request="payoff_request"></PayoffRequest>
    </b-row>
  </div>  
</template>

<script>
import PayoffRequest from "@/components/servicing/PayoffRequest";
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import PayoffNav from "@/components/Loan/Servicing/PayoffNav.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components:{
    PayoffRequest,
    ServicingLoanNav,
    PayoffNav
  },
  async fetch({ store, params }) {
		await store.dispatch("loan_servicing/GET_PAYOFF_REQUEST", params.id);
	},
	computed: mapGetters({
		payoff_request: "loan_servicing/payoff_request"
	})
}
</script>