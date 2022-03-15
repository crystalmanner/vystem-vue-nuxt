<template>
	<span>
		<span
			class="badge p-2 badge-success font-weight-light"
		>{{loan.secondary.status}} {{preposition}}{{loan.secondary.bank}}{{loan.secondary.secondary_partner}}</span>
	</span>
</template>

<script>
export default {
	props: ["loan"],
	data() {
		return {
			status: "",
			preposition: ""
		};
	},
	created() {
		if (
			this.loan.secondary.status != "Available" &&
			this.loan.secondary.status != "Pending"
		) {
			this.preposition = "to ";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>