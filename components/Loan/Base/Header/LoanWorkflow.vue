<template>
	<span>
		<span class="font-weight-lighter p-2 badge badge-light">
			Valuation
			<i
				class="fa fa-check text-success"
				v-if="loan.loan_workflow.valuations_approved == true"
			></i>
			<i class="fa fa-ban text-danger" v-else></i>
		</span>
		<span class="font-weight-lighter p-2 badge badge-light">
			Construction
			<i
				class="fa fa-check text-success"
				v-if="loan.loan_workflow.construction_approved == true"
			></i>
			<i class="fa fa-ban text-danger" v-else></i>
		</span>
		<span class="font-weight-lighter p-2 badge badge-light">
			Manager
			<i class="fa fa-check text-success" v-if="loan.loan_workflow.manager_approved == true"></i>
			<i class="fa fa-ban text-danger" v-else></i>
		</span>
		<span class="font-weight-lighter p-2 badge badge-light">
			Underwriting
			<i
				class="fa fa-check text-success"
				v-if="loan.loan_workflow.underwriting_approved == true"
			></i>
			<i class="fa fa-ban text-danger" v-else></i>
		</span>
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