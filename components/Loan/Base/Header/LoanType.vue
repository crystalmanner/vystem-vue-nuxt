<template>
	<span>
		<span class="badge p-2 badge-light">
			<span class="font-weight-light">{{escrow}}/{{loan_type}}</span>
		</span>
		<LoanHoldback :loan="loan" v-if="loan.loan_detail.holdback_funds > 0" />
		<span class="badge p-2 badge-light">
			<strong class="font-weight-bolder">{{loan_program}}</strong>
		</span>
	</span>
</template>

<script>
import LoanHoldback from "@/components/Loan/Base/Header/LoanHoldback";
export default {
	props: ["loan"],
	components: {
		LoanHoldback
	},
	data() {
		return {
			loan_type: "",
			loan_program: "",
			escrow: ""
		};
	},
	created() {
		switch (this.loan.loan_detail.loan_type_id) {
			case 0:
				this.loan_type = "Purchase";
				break;
			case 1:
				this.loan_type = "Refinance";
				break;
			case 2:
				this.loan_type = "Modification";
				break;
			default:
				this.loan_program = `Unknown ${this.loan.loan_detail.loan_type_id}`;
		}

		switch (this.loan.loan_detail.loan_program_id) {
			case 4:
				this.loan_program = "vMax";
				break;
			case 3:
				this.loan_program = "v100";
				break;
			case 6:
				this.loan_program = "Bridge";
				break;
			case 11:
				this.loan_program = "Construction";
				break;
			case 12:
				this.loan_program = "F/F";
				break;
			case 13:
				this.loan_program = "Bridge+";
				break;
			case 14:
				this.loan_program = "Land";
				break;
			default:
				this.loan_program = `Unknown ${this.loan.loan_detail.loan_program_id}`;
		}

		switch (this.loan.loan_detail.escrow_or_auction) {
			case 1:
				this.escrow = "Escrow";
				break;
			case 2:
				this.escrow = "Auction";
				break;
			default:
				this.loan_program = `Unknown ${this.loan.loan_detail.escrow_or_auction}`;
		}
	}
};
</script>

<style lang="scss" scoped>
</style>