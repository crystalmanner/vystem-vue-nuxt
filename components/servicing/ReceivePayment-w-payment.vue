<template>
	<div>
		<b-row>
			<b-col>
				<b-card title="Payment Method">
					<b-card-text>
						<b-row>
							<b-col>
								<label>Payment Received Date:</label>
								<input type="text" class="form-control datepicker" v-bind="date_received" />
							</b-col>
							<b-col>
								<label>Client Payment Received:</label>
								<money type="text" v-model.number="payment_amount" v-bind="money" class="form-control"></money>
							</b-col>
							<b-col>
								<label>Method:</label>
								<select
									name="method"
									id="method"
									class="selectpicker form-control"
									data-title
									title
									data-style="btn-default btn-block"
									data-menu-style="dropdown-blue"
								>
									<option value>Check</option>
									<option value>Wire</option>
									<option value>Cashier's Check</option>
								</select>
							</b-col>
							<b-col>
								<label>Memo:</label>
								<input type="text" class="form-control" value />
							</b-col>
						</b-row>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-card title="Apply Payment To:">
					<b-card-text>
						<div id="payment">
							<table class="table table-striped">
								<thead>
									<th>Date</th>
									<th>Type</th>
									<th>Note</th>
									<th>Due</th>
									<th>Applied From Customer</th>
									<th></th>
								</thead>
								<tbody>
									<tr v-for="item in payment_items" :key="payment_items.id">
										<td>{{item.date}}</td>
										<td>{{item.type}}</td>
										<td>{{item.note}}</td>
										<td>{{item.amount | currency}}</td>
										<td>
											<input type="text" v-model.number="item.applied" class="form-control" />
										</td>
										<td>
											<i
												class="text-success fa fa-check-circle"
												v-if="checkLineTotal(item.amount,item.applied,item.appliedFromReserve,item.appliedFromHolding)"
											></i>
											<i
												class="text-danger fa fa-exclamation-triangle"
												v-if="checkLineTotalOver(item.amount,item.applied,item.appliedFromReserve,item.appliedFromHolding)"
											></i>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td>{{totalDue | currency}}</td>
										<td>{{totalApplied | currency}}</td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
						<hr />
						<div class="row">
							<div class="col-md-12 text-right">
								<p>Interest Paid: {{interest_paid | currency}}</p>
								<p>Fees Paid: {{fees_paid | currency}}</p>
								<p>Total Applied: {{total_applied | currency}}</p>
								<p>Remaining Account Balance: {{remaining_account_balance | currency}}</p>
								<hr />
								<h4>Payment Balance: {{balance | currency}}</h4>
							</div>
						</div>
						<hr />
						<div class="row">
							<div class="col-md-12">
								<div class="pull-right">
									<b-button
										class="btn btn-fill btn-info"
										v-if="balance > 0"
										@click="submitToPrincipal"
									>Apply Credit to Principal</b-button>
									<b-button
										class="btn btn-fill btn-info"
										v-if="balance > 0"
										@click="submitToIR"
									>Apply Credit to Account</b-button>
									<a href="#" class="btn btn-fill btn-success">Print</a>
									<a href="#" class="btn btn-fill btn-success">Email</a>
									<b-button
										class="btn btn-fill btn-success"
										v-if="balance == 0"
										@click="submitSave"
									>Save Payment</b-button>
									<!-- <b-button class="btn btn-fill btn-danger" v-if="balance < 0">Issue Refund</b-button> -->
								</div>
							</div>
						</div>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>
		<b-card title>
			<b-card-text>
				{{payment_items}}
				<hr />
				{{api_response}}
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import _ from "lodash";
import $ from "jquery";
export default {
	props: ["loan_id"],
	data: function() {
		return {
			api_response: [],
			irTotal: 0,
			date_received: "",
			payment_items: [],
			status: "",
			payment_amount: 0,
			remainder: 0,
			lifecycle_status: "",
			money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 2,
				masked: false /* doesn't work with directive */
			}
		};
	},
	mounted: function() {
		var args = {
			format: "MM/DD/YYYY",
			icons: {
				time: "fa fa-clock-o",
				date: "fa fa-calendar",
				up: "fa fa-chevron-up",
				down: "fa fa-chevron-down",
				previous: "fa fa-chevron-left",
				next: "fa fa-chevron-right",
				today: "fa fa-screenshot",
				clear: "fa fa-trash",
				close: "fa fa-remove"
			}
		};
		this.$nextTick(function() {
			// $(".datepicker").datetimepicker(args);
		});
		this.$nextTick(function() {
			// $(".time-picker").datetimepicker({
			// 	format: "LT"
			// });
		});
	},
	watch: {
		payment_amount: function(newQuestion, oldQuestion) {
			this.remainder = parseFloat(this.payment_amount);
		}
	},
	methods: {
		addpaymentitem: function(x) {
			this.payment_items.push({
				id: x.id,
				type: x.type,
				note: x.notes,
				amount: x.amount * 1,
				applied: 0,
				date: x.transaction_date
			});
		},
		checkLineTotal: function(due, applied) {
			let total = applied;
			if (due == total) {
				return true;
			} else {
				return false;
			}
		},
		checkLineTotalOver: function(due, applied) {
			let total = applied;
			if (due < total) {
				return true;
			} else {
				return false;
			}
		},
		applyPaymentToPaymentItem: function(x) {
			// if (this.remainder == 0 || this.remainder < 0) {
			// 	x.applied = 0;
			// }
			if (this.remainder < x.amount) {
				x.applied = this.remainder;
				this.remainder = 0;
			} else if (this.remainder > x.amount) {
				x.applied = x.amount;
				this.remainder = this.remainder - x.amount;
			}
			// else if (this.remainder < x.amount) {
			// 	x.applied = this.remainder;
			// 	this.remainder = 0;
			// }
		},
		submitToPrincipal: function(x) {
			this.$axios
				.post(`/v1/servicing/payments/${this.loan.loan_detail.id}/principal/`, {
					payment_items: this.payment_items
				})
				.then(response => {
					this.$router.push(`/loans/${this.loan.loan_detail.id}/servicing`);
				})
				.catch(e => {
					this.errors.push(e);
				});
		},
		submitToIR: function(x) {
			this.$axios
				.post(`/v1/servicing/payments/${this.loan.loan_detail.id}/ir/`, {
					payment_items: this.payment_items
				})
				.then(response => {
					this.$router.push(`/loans/${this.loan.loan_detail.id}/servicing`);
				})
				.catch(e => {
					this.errors.push(e);
				});
		},
		submitSave: function(x) {
			this.$axios
				.post(`/v1/servicing/payments/${this.loan.loan_detail.id}/save/`, {
					payment_items: this.payment_items
				})
				.then(response => {
					this.$router.push(`/loans/${this.loan.loan_detail.id}/servicing`);
				})
				.catch(e => {
					this.errors.push(e);
				});
		}
	},
	computed: {
		balance() {
			let self = this;
			_.each(this.payment_items, function(x) {
				self.applyPaymentToPaymentItem(x);
			});
			if (this.payment_amount != 0) {
				return this.payment_amount - this.totalApplied;
			} else {
				return this.payment_amount;
			}
		},
		interest_paid() {
			let self = this;
			let applied = 0;
			_.each(this.payment_items, function(x) {
				if (x.type == "Interest") {
					applied = applied + x.applied;
				}
			});
			return applied;
		},
		fees_paid() {
			let self = this;
			let applied = 0;
			_.each(this.payment_items, function(x) {
				if (x.type == "Fee") {
					applied = applied + x.applied;
				}
			});
			return applied;
		},
		totalDue() {
			return _.sumBy(this.payment_items, "amount");
		},
		totalApplied() {
			return _.sumBy(this.payment_items, "applied");
		},
		total_applied() {
			return this.totalApplied;
		},
		remaining_account_balance() {
			return this.totalDue - this.total_applied;
		}
	},
	created() {
		let self = this;
		this.$axios
			.get("/v1/servicing/payments/" + this.loan_id)
			.then(response => {
				this.api_response = response.data;
				_.each(this.api_response, function(x) {
					self.addpaymentitem(x);
				});
			})
			.catch(error => {
				console.log(error);
			});
	}
};
</script>

<style lang="scss" scoped>
</style>