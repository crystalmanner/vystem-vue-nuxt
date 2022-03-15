<template>
	<div>
		<b-card title>
			<b-card-text>
				<b-row>
					<b-col>
						<label>Loan Number:</label>
						<input type="text" class="form-control" v-model="loan_number" placeholder="Enter Loan Number" />
					</b-col>
					<b-col>
						<div
							class="alert alert-success mt-4"
							v-show="status != ''"
							v-if="status== 'Loan Found!'"
						>{{ status }}</div>
						<div
							class="alert alert-danger mt-4"
							v-show="status != ''"
							v-if="status== 'Loan Not Found!'"
						>{{ status }}</div>
					</b-col>
				</b-row>
			</b-card-text>
		</b-card>
		<b-card title="Loan Details" v-if="show_loan == 'yes'">
			<b-card-text>
				Loan Number: {{loan.details.loan_number}}
				<br />
				Interest Type: {{loan.details.interest_type}}
				<br />
				Interest Rate: {{loan.details.interest_rate}}
				<br />
				Loan Amount: {{loan.details.loan_amount | currency}}
			</b-card-text>
		</b-card>
		<b-card title="General Ledger" v-if="show_loan == 'yes'">
			<b-card-text>
				<GeneralLedger :general_ledger="loan.general_ledger"></GeneralLedger>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import GeneralLedger from "@/components/Loan/Servicing/Transactions/GeneralLedger.vue";
export default {
	components: {
		GeneralLedger
	},
	data: function() {
		return {
			loan: [],
			loan_number: "",
			status: "",
			status_color: "",
			show_loan: ""
		};
	},
	watch: {
		// whenever question changes, this function will run
		loan_number: function(newQuestion, oldQuestion) {
			if (this.loan_number.length === 4) {
				this.status = "Searching for loan: " + this.loan_number;
				this.getLoan();
			}
			if (this.loan_number.length < 4) {
				this.status = "";
				this.loan = [];
				this.show_loan = "";
			}
		}
	},
	methods: {
		getLoan() {
			this.show_loan = "";
			let url = "/v1/servicing/testing/" + this.loan_number;
			this.$axios
				.get(url)
				.then(response => {
					this.loan = response.data[0].data;
					this.status = "Loan Found!";
					this.status_color = "alert-success";
					this.show_loan = "yes";
				})
				.catch(error => {
					this.status = "Loan Not Found!";
					this.loan = [];
					this.status_color = "alert-danger";

					this.show_loan = "";
					// console.log(error);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>