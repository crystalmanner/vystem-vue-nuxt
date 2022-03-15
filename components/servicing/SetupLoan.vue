<template>
	<div>
		<b-card :title="'Loan ' + loan.loan_detail.loan_number">
			<b-card-text>
				<table class="table table-striped">
					<tr>
						<th width="40%">Lender Credit :</th>
						<td width="60%">{{loan.loan_detail.lender_credit | currency}}</td>
					</tr>
					<tr>
						<th width="40%">Holdback Disbursement :</th>
						<td width="60%">{{loan.loan_detail.holdback_disbursement | currency}}</td>
					</tr>
					<tr>
						<th width="40%">Holdback Disbursement Notes :</th>
						<td width="60%">{{loan.loan_detail.holdback_disburement_notes}}</td>
					</tr>
					<tr>
						<th width="40%">Interest Reserve Disbursement :</th>
						<td width="60%">{{loan.loan_detail.interest_reserve_disbursement | currency}}</td>
					</tr>
					<tr>
						<th width="40%">Interest Reserve Disbursement Notes:</th>
						<td width="60%">{{loan.loan_detail.interest_reserve_disbursement_notes}}</td>
					</tr>
				</table>
				<hr />
				<b-button variant="success" block size="lg" @click="submitForm">Fund Loan</b-button>
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
				holding_fees_balance: 0,
				fees: []
			},
			fee_types: [
				{ name: "Holdback Dispursement", id: "Holdback Dispursement" },
				{ name: "Processing Fee", id: "Processing Fee" },
				{ name: "IR Dispursement", id: "IR Dispursement" },
				{ name: "Holdback Dispursement", id: "Holdback Dispursement" },
				{ name: "Holdback Dispursement", id: "Holdback Dispursement" }
			],
			money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 2,
				masked: false /* doesn't work with directive */
			},
			formErrors: []
		};
	},
	mounted: function() {
		// var args = {
		//   format: "MM/DD/YYYY",
		//   icons: {
		//     time: "fa fa-clock-o",
		//     date: "fa fa-calendar",
		//     up: "fa fa-chevron-up",
		//     down: "fa fa-chevron-down",
		//     previous: "fa fa-chevron-left",
		//     next: "fa fa-chevron-right",
		//     today: "fa fa-screenshot",
		//     clear: "fa fa-trash",
		//     close: "fa fa-remove"
		//   }
		// };
		// this.$nextTick(function () {
		//   $(".datepicker").datetimepicker(args);
		// });
		// this.$nextTick(function () {
		//   $(".time-picker").datetimepicker({
		//     format: "LT"
		//   });
		// });
	},
	methods: {
		submitForm() {
			this.$axios
				.post(`/v1/servicing/fund/${this.loan.loan_detail.id}`, {})
				.then(response => {
					this.$router.push(`/loans/${this.loan.loan_detail.id}/servicing/`);
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
			total = total + _.sumBy(this.form.fees, "amount");
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
		this.docs_funded_loan_amount = parseFloat(
			this.loan.loan_detail.funded_loan_amount
		);
		this.form.wire_to_escrow = parseFloat(this.loan.loan_detail.wire_to_escrow);
		if (this.loan.loan_detail.per_diem_total === null) {
			this.form.per_diem_total = 0;
		} else {
			this.form.per_diem_total = parseFloat(
				this.loan.loan_detail.per_diem_total
			);
		}
		this.form.interest_reserve_balance = parseFloat(
			this.loan.loan_detail.interest_reserve
		);
	}
};
</script>

<style lang="scss" scoped>
</style>