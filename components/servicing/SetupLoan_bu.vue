<template>
	<div>
		<b-card :title="'Loan ' + loan.loan_detail.loan_number">
			<b-card-text>
				<hr />
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label>Holdback Disbursement:</label>
							<money
								type="text"
								disabled="true"
								class="form-control"
								v-bind="money"
								v-model="loan.loan_detail.holdback_disbursement"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Interest Reserve Disbursement:</label>
							<money
								type="text"
								disabled="true"
								class="form-control"
								v-bind="money"
								v-model="loan.loan_detail.ir_disbursement"
							/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label>Holdback Disbursement:</label>
							<textarea rows="2" class="form-control" required v-model="form.holdback_disbursement_notes"></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>Interest Reserve Disbursement:</label>
							<textarea rows="2" class="form-control" required v-model="form.ir_disbursement_notes"></textarea>
						</div>
					</div>
				</div>
				<hr />
				<div>
					<h5>Docs Funded Loan Amount: {{ total_docs_funded_loan_amount | currency}}</h5>
					<h5 class="text-danger">Your Funded Loan Amount: {{funded_loan_amount | currency}}</h5>
					<h5>Difference: {{ difference | currency}}</h5>
				</div>
				<hr />
				<b-button variant="success" block size="lg" @click="submitForm">Fund Loan</b-button>
				<!-- <b-button variant="success" block size="lg" @click="submitForm" :class="loan.status != 'Funded' ? 'disabled' : ''">Fund Loan</b-button> -->
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
export default {
	props: ["loan"],
	data: function() {
		return {
			docs_funded_loan_amount: 0,
			form: {
				holdback_disbursement_notes: "",
				ir_disbursement_notes: ""
			},
			money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 1,
				masked: false /* doesn't work with directive */
			},
			formErrors: []
		};
	},
	methods: {
		submitForm() {
			this.$axios
				.post(`/v1/servicing/fund/${this.loan.loan_detail.id}`, {
					holdback_disbursement_notes: this.form.holdback_disbursement_notes,
					ir_disbursement_notes: this.form.ir_disbursement_notes
				})
				.then(response => {
					this.$router.push(`/loans/${this.loan.loan_detail.id}/servicing`);
				})
				.catch(e => {
					this.formErrors.push(e);
				});
		}
	},
	computed: {
		funded_loan_amount: function() {
			var total = 0;
			total = total + this.form.wire_to_escrow;
			total = total + this.form.per_diem_total;
			return total;
		},
		total_docs_funded_loan_amount: function() {
			return this.docs_funded_loan_amount + this.form.interest_reserve_balance;
		},
		difference: function() {
			return this.funded_loan_amount - this.total_docs_funded_loan_amount;
		}
	},
	created() {
		// this.docs_funded_loan_amount = parseFloat(
		//   this.loan.loan_detail.funded_loan_amount
		// );
		// this.form.wire_to_escrow = parseFloat(this.loan.loan_detail.wire_to_escrow);
		// if (this.loan.loan_detail.per_diem_total === null) {
		//   this.form.per_diem_total = 0;
		// } else {
		//   this.form.per_diem_total = parseFloat(
		//     this.loan.loan_detail.per_diem_total
		//   );
		// }
		// this.form.interest_reserve_balance = parseFloat(
		//   this.loan.loan_detail.interest_reserve
		// );
	}
};
</script>

<style lang="scss" scoped>
</style>