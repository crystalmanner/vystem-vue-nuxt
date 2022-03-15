<template>
	<b-card title="Servicing">
		<ServicingNav></ServicingNav>
		<b-card-text>
			<div class="p-4">
				<b-button variant="success" to="/loans/5258/servicing">Testing Loan</b-button>
				<b-button variant="success" size="md" to="/servicing/fund-loan/">Fund Loan</b-button>
				<b-button variant="success" size="md" to="/servicing/receive-payment/">Receive Payment</b-button>
				<b-button
					variant="success"
					size="md"
					to="/servicing/monthly-statements/"
				>Process Monthly Statements</b-button>
			</div>
		</b-card-text>
		<b-card-text>
			<strong>
				<ServicingLoan :funded_loan="funded_loan"></ServicingLoan>
			</strong>
		</b-card-text>
	</b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import ServicingLoan from "@/components/servicing/ServicingFundedLoan";
import { mapGetters } from "vuex";

export default {
	components: {
		ServicingNav,
		ServicingLoan
	},
	async fetch({ store, params }) {
		await store.dispatch("servicing/GET_FUNDED_LOAN");
	},
	computed: mapGetters({
		funded_loan: "servicing/funded_loans"
	})
};
</script>

<style lang="scss" scoped>
</style>