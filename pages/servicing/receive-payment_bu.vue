<template>
	<div>
		<div class="row">
			<div class="col-md-12" v-if="calc_holding">
				<div class="alert alert-danger">Holding Balance gretter than Holding Balance</div>
			</div>
			<div class="col-md-12" v-if="calc_interest">
				<div class="alert alert-danger">IR Balance gretter than Intrest Reserve Summary</div>
			</div>
		</div>

		<hr />
		<div class="row">
			<div class="col-md-3">
				<div class="form-group">
					<label>Payment Received Date:</label>
					<input type="text" class="form-control datepicker" v-bind="date_received" />
				</div>
			</div>
			<div class="col-md-3">
				<div class="form-group">
					<label>Client Payment Received:</label>
					<money type="text" v-model.number="payment_amount" v-bind="money" class="form-control"></money>
				</div>
			</div>
			<div class="col-md-3">
				<div class="form-group">
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
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label>Memo:</label>
					<input type="text" class="form-control" value />
				</div>
			</div>
		</div>
		<hr />
		<div id="payment">
			<table class="table table-striped">
				<thead>
					<th>Date</th>
					<th>Type</th>
					<th>Due</th>
					<th>Applied From Customer</th>
					<th>Applied From IR Balance</th>
					<th>Applied From Holding</th>
					<th></th>
				</thead>
				<tbody>
					<tr v-for="item in payment_items" :key="payment_items.id">
						<td>{{item.date}}</td>
						<td>{{item.type}}</td>
						<td>{{_.round(item.amount,2) | currency}}</td>
						<td>
							<money type="text" v-model.number="item.applied" v-bind="money" class="form-control"></money>
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
						<td>{{totalDue | currency}}</td>
						<td>{{totalApplied | currency}}</td>
						<td>{{totalAppliedFromReserve | currency}}</td>
						<td>{{totalAppliedFromHolding | currency}}</td>
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
					<a href="#" class="btn btn-fill btn-info" v-if="balance > 0">Apply Credit to Principal</a>
					<a href="#" class="btn btn-fill btn-info" v-if="balance > 0">Apply Credit to Account</a>
					<a href="#" class="btn btn-fill btn-success">Print</a>
					<a href="#" class="btn btn-fill btn-success">Email</a>
					<a
						href="#"
						class="btn btn-fill btn-success"
						v-if="balance == 0"
						:disabled="calc_holding || calc_interest"
					>Save Payment</a>
					<a href="#" class="btn btn-fill btn-danger" v-if="balance < 0">Issue Refund</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import _ from "lodash";
import $ from "jquery";
export default {
	props: ["loan"],
	data: function() {
		return {
			irTotal: 0,
			date_received: "",
			payment_items: [],
			errors: [],
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
				amount: x.amount,
				applied: 0,
				date: x.date
			});
		},
		checkLineTotal: function(due, applied) {
			total = applied;
			if (due == total) {
				return true;
			} else {
				return false;
			}
		},
		checkLineTotalOver: function(due, applied) {
			total = applied;
			if (due < total) {
				return true;
			} else {
				return false;
			}
		},
		applyPaymentToPaymentItem(x) {
			if (this.remainder == 0 || this.remainder < 0) {
				x.applied = 0;
			} else if (this.remainder > x.amount) {
				x.applied = x.amount;
				this.remainder = this.remainder - x.applied;
			} else {
				x.applied = this.remainder;
				this.remainder = 0;
			}
		}
	},
	computed: {
		balance() {
			let self = this;
			_.each(this.payment_items, function(x) {
				self.applyIRtoPaymentItem(x);
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
			applied = 0;
			_.each(this.payment_items, function(x) {
				if (x.type == "Interest Payment") {
					applied = applied + x.applied;
				}
			});
			return applied;
		},
		fees_paid() {
			let self = this;
			applied = 0;
			_.each(this.payment_items, function(x) {
				if (x.type == "Late Fee") {
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
		},
		calc_holding() {
			if (
				1 == 2
				//this.totalAppliedFromHolding >
				// this.loan.summary.holding_balance.replace("$", "").replace(",", "")
			) {
				return true;
			} else {
				return false;
			}
		},
		calc_interest() {
			if (
				1 == 2
				// this.totalAppliedFromReserve >
				// this.loan.summary.interest_reserve_summary
				// 	.replace("$", "")
				// 	.replace(",", "")
			) {
				return true;
			} else {
				return false;
			}
		}
	},
	created() {
		this.$axios
			.get("/v1/servicing/payments/2019.0320")
			.then(response => {
				this.loan = response.data;
			})
			.catch(error => {
				console.log(error);
			});

		this.irTotal = this.loan.interest_reserve_number;
		_.each(this.loan.interest_charges, function(x) {
			self.addpaymentitem(x);
		});
		_.each(this.loan.fees, function(x) {
			self.addpaymentitem(x);
		});
	}
};
</script>

<style lang="scss" scoped>
</style>