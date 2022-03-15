<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>		
    <PayoffNav></PayoffNav>
    <b-row>
			<b-col cols="6">
				<b-card title="Payoff Loan Information">
					<b-card-text>
						<form>
							<div class="row form-group">
								<div class="col-md-3">
									<label>Payoff Date</label>
									<!-- <el-date-picker v-model="payoff.payoff_date" type="date" placeholder="Date picker here">
									</el-date-picker>-->
									<input class="form-control" type="date" required v-model="payoff.payoff_date" />
								</div>
								<div class="col-md-3">
									<label>Note Balance</label>
									<input class="form-control" type="text" required v-money="money" v-model="payoff.note_balance" />
								</div>
								<div class="col-md-3">
									<label>Holdback Balance</label>
									<input class="form-control" type="text" required v-money="money" v-model="payoff.holdback_balance" />
								</div>
								<div class="col-md-3">
									<label>IR Balance</label>
									<input class="form-control" type="text" required v-money="money" v-model="payoff.ir_balance" />
								</div>
							</div>
							<div class="row form-group">
								<div class="col-md-3">
									<label>Late fees</label>
									<input class="form-control" type="text" required v-money="money" v-model="payoff.late_fees" />
								</div>
								<div class="col-md-3">
									<label>Recording fee</label>
									<input
										class="form-control"
										type="text"
										value="250"
										required
                    v-money="money"
										v-model="payoff.recording_fee"
									/>
								</div>

								<div class="col-md-3">
									<label>Reconveyance Fee</label>
									<input
										class="form-control"
										type="text"
										value="250"
										required
                    v-money="money"
										v-model="payoff.reconveyance_fee"
									/>
								</div>
								<div class="col-md-3">
									<label>Processing/Postage Fee</label>
									<input
										class="form-control"
										type="text"
										value="50"
                    v-money="money"
										required
										v-model="payoff.processing_fee"
									/>
								</div>
							</div>
							<div class="row form-group">
								<div class="col-md-3">
									<label>Unpaid Interest</label>
									<input class="form-control" type="text" v-model="payoff.unpaid_interest" v-money="money" />
								</div>
								<div class="col-md-3">
									<label>Other fees</label>
									<input class="form-control" type="text" v-model="payoff.other_fees" v-money="money" />
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<label for="Notes">Notes</label>
									<textarea
										name="notes"
										id="notes"
										cols="30"
										rows="10"
										v-model="payoff.notes"
										class="form-control"
									></textarea>
								</div>
							</div>
							<b-row>
								<b-col cols="3">
									<button type="button" @click.prevent="validate" class="btn btn-fill btn-success">Calculate</button>
								</b-col>
								<b-col cols="3">
									<button type="button" @click.prevent="submit" class="btn btn-fill btn-success">Save</button>
								</b-col>
							</b-row>
						</form>
					</b-card-text>
				</b-card>
			</b-col>
			<b-col cols="6">
				<b-card title="Payoff Calculations">
					<b-card-text>
						<table class="table table-striped table-bordered outlined mt-2">
							<tr>
								<td nowrap width="50%">Loan Number</td>
								<td>{{table.loan_number}}</td>
							</tr>
							<tr>
								<td nowrap>Payoff Date</td>
								<td>{{table.payoff_date_formated}}</td>
							</tr>
							<tr>
								<td nowrap>Max Loan Amount</td>
								<td>{{table.loan_amount | currency}}</td>
							</tr>
							<tr>
								<td>Funded Loan Amount</td>
								<td>{{table.funded_loan_amount}}</td>
							</tr>
							<tr>
								<td nowrap>Loan Maturity Date</td>
								<td>{{table.loan_maturity_date}}</td>
							</tr>
							<tr>
								<td nowrap>Days of Per Diem</td>
								<td>{{table.days_of_per_diem}}</td>
							</tr>
							<tr>
								<td nowrap>Partial Month Interest</td>
								<td>{{table.partial_month_interest}}</td>
							</tr>
							<tr>
								<th nowrap>Total Payoff</th>
								<th>{{table.total_payoff}}</th>
							</tr>
						</table>

						<table class="table table-striped table-bordered outlined mt-2">
							<tr>
								<td nowrap width="50%">Holdback</td>
								<td>{{table.holdback | currency}}</td>
							</tr>
							<tr>
								<td nowrap>Interest Reserve</td>
								<td>{{table.interest_reserve | currency}}</td>
							</tr>
							<tr>
								<td nowrap>Ballon Payment</td>
								<td>{{table.ballon_payment}}</td>
							</tr>
							<tr>
								<td nowrap>Payoff Credit</td>
								<td>{{table.booked_payoff_credit}}</td>
							</tr>
							<tr>
								<td>Early Payoff Credit Amount</td>
								<td>{{table.early_payoff_credit_amount}}</td>
							</tr>
							<tr>
								<td nowrap>Payoff Credit Date</td>
								<td>{{table.payoff_credit_date}}</td>
							</tr>
							<tr>
								<td nowrap>Loan In Default</td>
								<td>{{table.loan_in_default}}</td>
							</tr>
							<tr>
								<td nowrap>
									Default Partial
									<br />Month Per Diem
								</td>
								<td>{{table.default_partial_month_interest}}</td>
							</tr>
						</table>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>
  </div>    
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import PayoffNav from "@/components/Loan/Servicing/PayoffNav.vue";
import PayoffRequest from "@/components/servicing/PayoffRequest";
import { mapGetters } from "vuex";

export default {
	props: ["loan"],  
  components:{
    ServicingLoanNav,
    PayoffNav,
    PayoffRequest
  },
  data() {
		return {
			payoff: {
				payoff_date: "",
				note_balance: this.loan.servicing.summary.current_principal,
				holdback_balance: this.loan.servicing.summary.interest_reserve,
				ir_balance: this.loan.servicing.summary.interest_reserve,
				late_fees: this.loan.servicing.summary.unpaid_fees,
				recording_fee: 250,
				reconveyance_fee: 250,
				processing_fee: 50,
				unpaid_interest: this.loan.servicing.summary.unpaid_interest,
				other_fees: "",
				notes: ""
			},
			table: {},
			data: [],
			money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 2,
				masked: true /* doesn't work with directive */
			}
		};
	},
	created() {
		this.$axios
			.get(`/v1/servicing/payoff/sum/` + this.loan.loan_detail.id)
			.then(response => {
				this.payoff.note_balance = response.data[0].data.general_ledger;
				this.payoff.ir_balance = response.data[0].data.interest_reserve;
				this.payoff.holdback_balance = response.data[0].data.loan_holdback;
			});
	},
	methods: {
		async submit() {
			await this.$axios
				.post(
					"/v1/servicing/payoff-request/" + this.loan.loan_detail.id,
					this.payoff
				)
				.then(response => {});
			await this.$store.dispatch(
				"loan_servicing/GET_PAYOFF_REQUEST",
				this.$route.params.id
			);
		},
		async validate() {
			await this.$axios
				.post("/v1/servicing/payoff/" + this.loan.loan_detail.id, this.payoff)
				.then(response => {
					this.table = response.data[0].data;
				});
		}
	}
}
</script>