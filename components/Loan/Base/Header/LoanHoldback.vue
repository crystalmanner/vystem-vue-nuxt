<template>
	<span>
		<span
			class="badge p-2 badge-light font-weight-light"
		>{{loan.loan_detail.interest_type}}/{{loan.loan_detail.draw_method}}</span>
	</span>
</template>

<script>
export default {
	props: ["loan"],
	data() {
		return {
			status: ""
		};
	}
};
</script>

<style lang="scss" scoped>
</style>