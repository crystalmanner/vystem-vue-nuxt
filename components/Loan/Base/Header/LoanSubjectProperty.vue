<template>
	<span class="text-muted">
		{{loan.loan_detail.loan_name}} {{loan.loan_detail.loan_city}}, {{loan.loan_detail.loan_county}} County, {{loan.loan_detail.loan_state}}, {{loan.loan_detail.loan_zipcode}}
		<span
			class="text-muted"
		></span>
	</span>
</template>

<script>
export default {
	props: ["loan"]
};
</script>

<style lang="scss" scoped>
</style>