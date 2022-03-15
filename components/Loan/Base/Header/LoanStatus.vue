<template>
	<span>
		<span class="badge p-2" :class="statusClass">{{status}}</span>
	</span>
</template>

<script>
export default {
	props: ["loan"],
	data() {
		return {
			status: "",
			statusClass: ""
		};
	},
	created() {
		switch (this.loan.loan_detail.status) {
			case "Pending":
				this.status = "Pending";
				this.statusClass = "badge-primary";
				break;
			case "Funded":
				this.status = `Funded ${this.loan.loan_detail.funded_datetime}`;
				this.statusClass = "badge-secondary";
				break;
			case "Cancelled":
				this.status = `Cancelled on ${this.loan.loan_detail.cancellation_date}`;
				this.statusClass = "badge-danger";
				break;
			case "Paid Off":
				this.status = "Paid Off";
				this.statusClass = "badge-success";
				break;
			case "Pending Modification":
				this.status = "Pending Modification";
				this.statusClass = "badge-danger";
				break;
			case "Closed":
				this.status = "Closed";
				this.statusClass = "badge-dark";
				break;
			default:
				this.status = "Unknown";
		}
	}
};
</script>

<style lang="scss" scoped>
</style>