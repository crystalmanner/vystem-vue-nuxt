<template>
	<div>
		<span
			class="badge p-2 badge-light font-weight-light"
			v-if="loan.loan_detail.funded_loan_amount != loan.loan_detail.loan_amount"
		>Day 1 Loan: {{loan.loan_detail.funded_loan_amount | currency}}</span>
		<span
			class="badge p-2 badge-light font-weight-light"
		>Holdback: {{loan.loan_detail.holdback_funds | currency}}</span>
		<span class="badge p-2 badge-light">
			<strong>Max Loan: {{loan.loan_detail.loan_amount | currency}}</strong>
		</span>
	</div>
</template>

<script>
export default {
	props: ["loan"]
};
</script>

<style lang="scss" scoped>
</style>