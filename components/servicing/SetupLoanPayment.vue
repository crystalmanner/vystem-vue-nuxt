<template>
	<div>
		<b-card :title="'Loan ' + loan.loan_detail.loan_number">
			<b-card-text>
				<hr />
				<div :v-show="formErrors">
					<div class="alert alert-danger" v-for="error in formErrors" :key="error">{{error}}</div>
				</div>
				<div class="pull-right">
					<b-button variant="default" size="md" @click="addFee">Add Fee</b-button>
				</div>
				<div class="clearfix"></div>
				<div class="row">
					<div class="col-md-12">
						<table class="table table-striped">
							<div v-for="(fee, index) in form.fees" :key="index">
								<tr>
									<td>
										<select v-model="fee.type" class="form-control">
											<option v-for="(type, index) in fee_types" :key="index">{{type.name}}</option>
										</select>
									</td>
									<td>
										<money type="text" class="form-control" v-model.number="fee.amount" v-bind="money"></money>
									</td>
									<td style="padding-left: 5px;">
										<b-button @click="removeFee(index)" variant="danger">Delete</b-button>
									</td>
								</tr>
							</div>
						</table>
					</div>
				</div>
				<hr />
				<div>
					<table class="table table-striped">
						<tr>
							<td>Docs Funded Loan Amount:</td>
							<td>{{ funded_loan_amount | currency}}</td>
						</tr>
						<tr>
							<td>Wire Out Amount:</td>
							<td>{{ wire_to_escrow | currency}}</td>
						</tr>
						<tr>
							<td>Borrower Fees & Interest Owed:</td>
							<td>{{ cash_owed | currency}}</td>
						</tr>
						<tr>
							<td>Borrower Fees & Interest Paid:</td>
							<td>{{amount_received | currency}}</td>
						</tr>
						<tr>
							<td>
								<strong>Difference</strong>:
							</td>
							<td>
								<strong>{{difference | currency}}</strong>
							</td>
						</tr>
					</table>
				</div>
				<hr />
				<b-button variant="success" block size="lg" @click="submitForm">Add Payments Received</b-button>
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
				holding_fees_balance: 0,
				fees: []
			},
			fee_types: [
				{ name: "Holdback Dispursement", id: "Holdback Dispursement" },
				{ name: "Processing Fee", id: "Processing Fee" },
				{ name: "Origination Fee", id: "Origination Fee" },
				{ name: "Recording Fee", id: "Recording Fee" },
				{ name: "Lender Credit", id: "Lender Credit" },
				{ name: "Interest", id: "Interest" },
				{ name: "Title Fee", id: "Title Fee" },
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
		customFormatter(date) {
			return moment(date).format("MM/DD/YYYY");
		},
		addFee: function() {
			this.form.fees.push({
				type: "Other",
				amount: 0
			});
		},
		removeFee: function(index) {
			this.form.fees.splice(index, 1);
		},
		submitForm() {
			this.$axios
				.post(`/v1/servicing/fund/${this.loan.loan_detail.id}`, {
					loan_amount: this.form.loan_amount,
					funded_loan_amount: this.docs_funded_loan_amount,
					all_fees: _.sumBy(this.form.fees, "amount"),
					interest_reserve: this.form.interest_reserve_balance,
					per_diem: this.form.per_diem_total,
					holdback_funds: this.form.holdback_funds_balance,
					holding_funds: this.form.holding_fees_balance,
					loan_id: this.loan.loan_detail.id,
					mod_loan_number: this.form.mod_loan_number,
					funding_datetime: this.form.funding_datetime,
					fees: this.form.fees
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
		cash_owed: function() {
			return this.funded_loan_amount - this.wire_to_escrow;
		},
		amount_received: function() {
			return _.sumBy(this.form.fees, "amount");
		},
		difference: function() {
			return this.cash_owed - this.amount_received || 0;
		}
	},
	created() {
		this.funded_loan_amount = parseFloat(
			this.loan.loan_detail.funded_loan_amount
		);
		this.wire_to_escrow = parseFloat(this.loan.loan_detail.wire_to_escrow);
		this.docs_funded_loan_amount = parseFloat(
			this.loan.loan_detail.funded_loan_amount
		);

		this.form.fees.push({
			type: "Origination Fee",
			amount: parseFloat(this.loan.loan_detail.origination_fee)
		});
		this.form.fees.push({
			type: "Processing Fee",
			amount: parseFloat(this.loan.loan_detail.processing_fee)
		});
		this.form.fees.push({
			type: "Interest",
			amount: parseFloat(this.loan.loan_detail.per_diem_total)
		});
		this.form.fees.push({
			type: "Lender Credit",
			amount: parseFloat(this.loan.loan_detail.lender_credit)
		});

		if (this.loan.recording_fee != 0) {
			this.form.fees.push({
				type: "Recording Fee",
				amount: parseFloat(this.loan.loan_detail.recording_fee)
			});
		}
		if (this.loan.title_fee != 0) {
			this.form.fees.push({
				type: "Title Fee",
				amount: parseFloat(this.loan.title_fee)
			});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>