<template>
	<span>
		<span
			class="badge p-2 badge-danger"
			v-if="borrower.detail.request_credit_check == 1"
		>Credit Check Requested</span>
	</span>
</template>

<script>
export default {
	props: ["borrower"],
	data() {
		return {};
	},
	created() {}
};
</script>

<style lang="scss" scoped>
</style>