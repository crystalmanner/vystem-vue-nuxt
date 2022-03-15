<template>
	<div>
		<div class>
			<div class="loan-card-top">
				<b-row>
					<b-col>
						<div class="loan-card-loan-amount">{{loan_card.loan_amount}}</div>
						<div class="loan-card-label">Max Loan Amount</div>
					</b-col>
					<b-col class="text-right">
						<div class="loan-card-funded-ltv">{{loan_card.funded_as_is_ltv}}</div>
						<div class="loan-card-label">Funded / As Is</div>
					</b-col>
				</b-row>
			</div>
			<b-row class="row-fluid loan-card-item">
				<b-col>
					<span v-show="loan_card.loan_type == 'Purchase'">Purchase Price</span>
					<span v-show="loan_card.loan_type == 'Modification'">Estimated Payoff</span>
					<span v-show="loan_card.loan_type == 'Refinance'">Estimated Payoff</span>
				</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.purchase_price}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item" v-if="loan_card.cash_out != '$0.00'">
				<b-col>Cash {{loan_card.cash_in_or_out}}</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.cash_out}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item" v-if="loan_card.escrow_or_auction == 'Auction'">
				<b-col>Auction Cash In</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.auction_cash_in}}</b-col>
				<b-col>Auction Cash In %</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.auction_cash_in_percent}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>Downpayment</b-col>
				<b-col class="text-right loan-card-item-bold">
					{{loan_card.downpayment}}
					<span v-if="loan_card.downpayment != '$0.00'">
						<br />
						{{loan_card.downpayment_percent}}
					</span>
				</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item" v-if="loan_card.holdback_funds != '$0.00'">
				<b-col>
					Holdback
					<div class="small">{{loan_card.interest_type}}</div>
				</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.holdback_funds}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item" v-if="loan_card.wholesale_fee != '$0.00'">
				<b-col>Wholesale Fee</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.wholesale_fee}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>Day 1 Funded</b-col>
				<b-col class="text-right loan-card-item-bold">
					{{loan_card.funded_loan_amount}}
					<br />
					{{loan_card.funded_as_is_ltv}}
				</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>
					As Is
					<div class="small">w/Collateral ({{loan_card.loan_collateral}})</div>
				</b-col>
				<b-col class="text-right loan-card-item-bold">
					{{loan_card.as_is}}
					<br />
				</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>Max Loan</b-col>
				<b-col class="text-right loan-card-item-bold">
					{{loan_card.loan_amount}}
					<br />
					{{loan_card.final_ltv}}
				</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>
					ARV
					<div class="small">w/Collateral ({{loan_card.loan_collateral}})</div>
				</b-col>
				<b-col class="text-right loan-card-item-bold">{{loan_card.arv}}</b-col>
			</b-row>
			<b-row class="row-fluid loan-card-item">
				<b-col>Cash at Closing</b-col>
				<b-col class="text-right loan-card-item-bold">
					<span v-if="loan_card.fees_at_closing > 0">{{loan_card.fees_at_closing}}</span>
					<span v-else>$0.00</span>
				</b-col>
			</b-row>

			<b-row class="row-fluid">
				<b-col class="col-md-4 loan-card-stat">
					{{loan_card.origination}}
					<div class="small">Origination</div>
				</b-col>
				<b-col class="col-md-4 loan-card-stat">
					{{loan_card.interest_rate}}
					<div class="small" v-if="loan_card.holdback_funds != '$0.00'">{{loan_card.draw_method}}</div>
				</b-col>
				<b-col class="col-md-4 loan-card-stat">
					{{loan_card.loan_term}}
					<div class="small">Loan Term</div>
				</b-col>
			</b-row>
			<b-row class="row-fluid text-right loan-card-pad-lr loan-card-pad-bottom">
				<!-- <a href="#" class="btn btn-default btn-fill btn-xs">Modify Terms</a> -->
			</b-row>
			<div class="loan-card-buttons">
				<b-row>
					<b-col>
						<a
							:href="loan_card.psa_link"
							class="btn btn-default btn-fill btn-xs btn-block"
							target="_blank"
							:disabled="!loan_card.psa_link"
						>View PSA</a>
					</b-col>
					<b-col>
						<a
							:href="loan_card.sow_link"
							class="btn btn-default btn-fill btn-xs btn-block"
							target="_blank"
							:disabled="!loan_card.sow_link"
						>View SOW</a>
					</b-col>
				</b-row>
			</div>
			<template v-if="loan_card.blacklisted === 'true'">
				<b-row class="row-fluid h-loan-borrower loan-card-buttons">
					<b-col class="label-xs">
						<span class="label label-danger">
							<i class="fa fa-exclamation-circle"></i>
							Blacklisted
						</span>
					</b-col>
				</b-row>
			</template>
			<div class="loan-card-buttons" v-if="loan_card.can_approve == true">
				<b-row>
					<b-col v-if="loan_card.status == 'Pending'">
						<template
							v-if="loan_card.valuation_approved == 'true' && loan_card.manager_approved == 'true'"
						>
							<template
								v-if="loan_card.holdback_fund > 0 || loan_card.loan_program_id == 11 || loan_card.loan_program_id == 12"
							>
								<template v-if="loan_card.construction_approved == 'true'">
									<a
										:href="'/underwriting/complete/' + loan_card.loan_id"
										class="btn btn-success btn-fill btn-lg btn-block"
									>UW Approve Loan</a>
								</template>
							</template>
						</template>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["loan"],
	data() {
		return {
			loan_card: ""
		};
	},
	created() {
		this.currentUrl = window.location.pathname;
		this.$axios
			.get(`/v1/loans/stats/loan-card/` + this.loan.loan_detail.id)
			.then(response => {
				// JSON responses are automatically parsed.
				this.loan_card = response.data[0].data;
			})
			.catch(e => {
				this.errors.push(e);
			});
	}
};
</script>

<style lang="scss" scoped>
/* Loan Card */
.loan-card {
	border-radius: 4px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
	background-color: #ffffff;
	margin-bottom: 30px;
}
.loan-card-top {
	border-bottom: 1px solid #e7e7e7;
}
.loan-card-top .col-md-6 {
	padding: 15px;
}
.loan-card-loan-amount,
.loan-card-funded-ltv {
	font-size: 28px;
	font-weight: bold;
	letter-spacing: -1px;
}
.loan-card-top .loan-card-label {
	font-size: 12px;
	color: #b4b4b4;
	top: -7px;
	position: relative;
}
.loan-card-item {
	border-bottom: 1px solid #e7e7e7;
	font-size: 18px;
	font-weight: 300;
	padding-top: 5px;
	padding-bottom: 5px;
}
.loan-card-item-bold {
	font-weight: bold;
}
.loan-card-item .small {
	font-size: 11px;
	top: -4px;
	position: relative;
}
.loan-card-stat {
	text-align: center;
	color: #000000;
	font-size: 22px;
	font-weight: bold;
	letter-spacing: -1px;
	padding-top: 15px;
	padding-bottom: 15px;
}
.loan-card-stat .small {
	font-size: 11px;
	top: -4px;
	position: relative;
	font-weight: normal !important;
	color: #b4b4b4;
}
.loan-card-buttons {
	border-top: 1px solid #e7e7e7;
	padding-top: 15px;
	padding-bottom: 15px;
}
.loan-card-pad-lr {
	padding-right: 15px;
	padding-left: 15px;
}
.loan-card-pad-bottom {
	padding-bottom: 15px;
}
</style>