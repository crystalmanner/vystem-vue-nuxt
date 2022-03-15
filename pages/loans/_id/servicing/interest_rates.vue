<template>
	<div>
		<ServicingLoanNav></ServicingLoanNav>

		<b-button variant="secondary" v-b-modal.add-interest-rates>Add Interest Rate Change</b-button>
		<InterestRateForm @createItem="createItem"></InterestRateForm>

		<InterestRates :interest_rates="interest_rates" :loan="loan"></InterestRates>
	</div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import InterestRates from "@/components/Loan/Servicing/InterestRates";
import InterestRateForm from "@/components/Loan/Servicing/AddInterestRateForm.vue";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		InterestRates,
		ServicingLoanNav,
		InterestRateForm
	},
	async fetch({ store, params }) {
		await store.dispatch("loan_servicing/GET_INTEREST_RATES", params.id);
	},
	computed: mapGetters({
		interest_rates: "loan_servicing/interest_rates"
	}),
	methods: {
		createItem: async function(e) {
			await this.$store.dispatch("loan_servicing/ADD_INTEREST_RATE", {
				id: this.$route.params.id,
				form: e
			});
			await this.$store.dispatch(
				"loan_servicing/GET_INTEREST_RATES",
				this.$route.params.id
			);
		}
	}
};
</script>

<style lang="scss" scoped></style>
