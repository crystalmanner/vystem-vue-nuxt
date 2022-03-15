<template>
  <b-card :title="`${loan.terms.loan_number} Auction Terms`">
    <br>
    <b-card-text>
      <table class="table table-striped">
        <tr>
          <td>Purchase Price:</td>
          <td>{{loan.terms.purchase_price_payoff}}</td>
        </tr>
        <tr v-if="loan.terms.wholesale_fee_in_loan == true">
          <td>+ Wholesale Fee:</td>
          <td>{{loan.terms.wholesale_fee}}</td>
        </tr>
        <tr v-if="loan.terms.broker_fee_in_loan == true">
          <td>+ Broker Fee:</td>
          <td>{{loan.terms.broker_fee}}</td>
        </tr>
        <tr>
          <td>
            <strong>Total Cost:</strong>
          </td>
          <td>
            <strong>{{loan.terms.total_purchase_price}}</strong>
          </td>
        </tr>
        <tr>
          <td>Auction Cash In:</td>
          <td>
            {{loan.terms.auction_cash_in_percent}} ( {{loan.terms.auction_cash_in}})
            <small
              v-if="loan.terms.auction_calc_on_percent == true"
            >[based on percent]</small>
            <small v-else>[based on amount]</small>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Difference:</strong>
          </td>
          <td>
            <strong>({{loan.terms.auction_difference}})</strong>
          </td>
        </tr>
        <tr>
          <td>Processing Fee:</td>
          <td>{{loan.terms.processing_fee}}</td>
        </tr>
        <tr>
          <td>Recording Fee</td>
          <td>{{loan.terms.recording_fee}}</td>
        </tr>
        <tr>
          <td>Title Fees:</td>
          <td>{{loan.terms.title_fee}}</td>
        </tr>
        <tr>
          <td>Origination Fee:</td>
          <td>{{loan.terms.origination_fee}} ({{loan.terms.origination_fee_percent}})</td>
        </tr>
        <tr>
          <td>Per Diem Interest:</td>
          <td>{{loan.terms.partial_month_per_diem}} ({{loan.terms.days_until_end_of_month_from_closing}} days x {{loan.terms.per_diem}})</td>
        </tr>
        <tr>
          <td>
            <strong>Estimated Veristone Costs (Subtotal):</strong>
          </td>
          <td>
            <strong>{{loan.terms.veristone_costs}}</strong>
          </td>
        </tr>
        <tr>
          <td>Interest Rate:</td>
          <td>{{loan.terms.interest_rate}}</td>
        </tr>
        <tr v-if="loan.terms.holdback > 0">
          <td>Holdback Funds:</td>
          <td v-if="loan.terms.has_holdback == false">"$0.00"</td>
          <td v-else>{{loan.terms.holdback}} ({{loan.terms.draw_method}})</td>
        </tr>
        <tr v-if="loan.terms.escrow_loan == false && loan.terms.loan_program_id == 12">
          <td>Holdback Per Diem:</td>
          <td>{{loan.terms.holdback_perdiem}}</td>
        </tr>
        <tr>
          <td>Conversion Fee:</td>
          <td>{{loan.terms.conversion}}</td>
        </tr>
        <tr>
          <td>
            <strong>Total conversion amount:</strong>
          </td>
          <td>({{loan.terms.conversion + loan.terms.holdback_perdiem}})</td>
        </tr>
        <tr v-if="loan.terms.loan_program_name == 'vmax'">
          <td>vMax Funds:</td>
          <td>{{loan.terms.vmax_funds}}</td>
        </tr>
        <tr v-if="loan.terms.loan_program_name == 'v100'">
          <td>Potential v100 Funds:</td>
          <td>{{loan.terms.v100_funds}}</td>
        </tr>
        <tr>
          <td>Loan Term:</td>
          <td>{{loan.terms.loan_term}} Days / {{loan.terms.loan_term/30}} Months</td>
        </tr>
        <tr>
          <td>Projected Funding Date:</td>
          <td>{{loan.terms.estimated_closing_date}}</td>
        </tr>
        <tr>
          <td>Loan Maturity:</td>
          <td>{{loan.terms.loan_maturity_date}}</td>
        </tr>
        <tr>
          <td>Loan Maturity EOM:</td>
          <td>{{loan.terms.loan_maturity_end_month_date}}</td>
        </tr>
        <!-- <tr>
				  <td>Downpayment Percent:</td>
				  <td>{{loan.terms.downpayment_percent}}</td>
        </tr>
			  <tr v-if="loan.terms.loan_program_name == 'vmax'">
				  <td>Funded Loan Balance</td>
				  <td>{{loan.terms.funded_loan_amount}}</td>
        </tr>
        <tr>
				  <td >Downpayment Amount:</td>
				  <td>{{loan.terms.downpayment_amount}}</td>
        </tr>-->
        <tr v-if="loan.terms.wholesale_fee_in_loan == false">
          <td>Wholesale Fee:</td>
          <td>{{loan.terms.wholesale_fee}}</td>
        </tr>
        <tr v-if="loan.terms.broker_fee_in_loan == false">
          <td>Broker Fee:</td>
          <td>{{loan.terms.broker_fee}}</td>
        </tr>
        <tr>
          <td>
            <strong>Note Loan Amount:</strong>
          </td>
          <td>
            <strong>{{loan.terms.loan_amount}}</strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Funded Loan Amount:</strong>
          </td>
          <td>
            <strong>
              {{loan.terms.funded_loan_amount}}
              <div v-if="loan.terms.has_holdback == true">(Holdback: {{loan.terms.holdback}})</div>
            </strong>
          </td>
        </tr>
      </table>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ["loan"]
};
</script>

<style lang="scss" scoped>
p {
  font-size: 13px;
  line-height: 1.5;
}
</style>