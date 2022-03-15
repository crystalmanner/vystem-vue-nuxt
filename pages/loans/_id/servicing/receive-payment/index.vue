<template>
	<div>
		<ServicingLoanNav></ServicingLoanNav>
		<ReceivePaymentNav></ReceivePaymentNav>
		<ReceivePayment :loan_id="loan.loan_detail.id"></ReceivePayment>
	</div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import ReceivePaymentNav from "@/components/Loan/Servicing/ReceivePaymentNav.vue";
import ReceivePayment from "@/components/servicing/ReceivePayment";
export default {
	props: ["loan"],
	components: {
		ServicingLoanNav,
		ReceivePaymentNav,
		ReceivePayment
	}
};
</script>

<style lang="scss" scoped>
</style>