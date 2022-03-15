<template>
	<span>
		<span class="badge p-2" :class="approvedClass">Prequal {{borrower.detail.approved_status}}</span>
	</span>
</template>

<script>
export default {
	props: ["borrower"],
	data() {
		return {
			approvedClass: ""
		};
	},
	created() {
		switch (this.borrower.detail.approved_status) {
			case "Approved":
				this.approvedClass = "badge-success";
				break;
			case "Declined":
				this.approvedClass = "badge-danger";
				break;
			default:
				this.approvedClass = "badge-danger";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>