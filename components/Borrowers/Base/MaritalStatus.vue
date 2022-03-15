<template>
	<span>
		<span
			class="badge p-2 badge-light"
			v-if="borrower.detail.marital_status_id != 0"
		>Martial Status: {{label}}</span>
	</span>
</template>

<script>
export default {
	props: ["borrower"],
	data() {
		return {
			label: ""
		};
	},
	created() {
		switch (this.borrower.detail.marital_status_id) {
			case 1:
				this.label = "Single";
				break;
			case 2:
				this.label = "Married";
				break;
			case 3:
				this.label = "Seperated";
				break;
			case 4:
				this.label = "Divorced";
				break;
			case 5:
				this.label = "Widowed";
				break;
			default:
				this.approvedClass = "badge-danger";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>