<template>
  <b-card :title="`${loan.terms.loan_number} Escrow Terms`">
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
        <tr v-if="loan.terms.draw_method == 'Advance'">
          <td>+ Holdback:</td>
          <td>{{loan.terms.holdback}}</td>
        </tr>
        <tr>
          <td>
            <strong>Total Cost:</strong>
          </td>
          <td>
            <strong>{{loan.terms.calc_ttl_purchase_price}}</strong>
          </td>
        </tr>
        <tr>
          <td>Downpayment Percent:</td>
          <td>
            {{loan.terms.downpayment_percent}} ( {{loan.terms.downpayment}} )
            <small
              v-if="loan.terms.downpayment_calc_on_percent == true"
            >[based on percent]</small>
            <small v-else>[based on amount]</small>
          </td>
        </tr>
        <tr v-if="loan.terms.draw_method == 'Reimbursement'">
          <td>Holdback:</td>
          <td>{{loan.terms.holdback}}</td>
        </tr>
        <tr>
          <td>Interest Reserve:</td>
          <td>{{loan.terms.interest_reserve}}</td>
        </tr>
        <tr v-if="loan.terms.loan_program_name == 'vmax'">
          <td>Potential vMax Funds:</td>
          <td>
            {{loan.terms.vmax_funds}}
            <br>
            <small>(Assuming value > {{loan.terms.total_purchase_price}})</small>
          </td>
        </tr>

        <tr v-if="loan.terms.loan_program_name == 'v100'">
          <td>Potential v100 Funds:</td>
          <td>
            {{loan.terms.v100_funds}}
            <br>
            <small>(Assuming value > {{loan.terms.total_purchase_price}} )</small>
          </td>
        </tr>
        <tr>
          <td>Loan Term:</td>
          <td>{{loan.terms.loan_term}} Days / {{loan.terms.loan_term / 30}} Months</td>
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
        <tr>
          <td>Interest Rate:</td>
          <td>{{loan.terms.interest_rate}} | {{loan.terms.interest_type}}</td>
        </tr>
        <tr>
          <td>Origination Fee:</td>
          <td>{{loan.terms.origination_fee}} ( {{loan.terms.origination_fee_percent}} )</td>
        </tr>
        <tr>
          <td>Processing Fee:</td>
          <td>{{loan.terms.processing_fee}}</td>
        </tr>
        <tr>
          <td>Per Diem Total:</td>
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
        <tr v-if="loan.terms.loan_program_name == 'vmax'">
          <td>Funded Loan Balance</td>
          <td>{{loan.terms.funded_loan_balance}}</td>
        </tr>
        <tr>
          <td>Downpayment Amount:</td>
          <td>{{loan.terms.downpayment}}</td>
        </tr>
        <tr>
          <td>Third Party Fees:</td>
          <td>{{loan.terms.third_party_fees}}</td>
        </tr>
        <tr>
          <td>Insurance Fees:</td>
          <td>{{loan.terms.insurance_fee}}</td>
        </tr>
        <tr v-if="loan.terms.wholesale_fee_in_loan == false">
          <td>Wholesale Fee:</td>
          <td>{{loan.terms.wholesale_fee}}</td>
        </tr>
        <tr v-if="loan.terms.broker_fee_in_loan == false">
          <td>Broker Fee:</td>
          <td>{{loan.terms.broker_fee}}</td>
        </tr>
        <tr v-if="loan.terms.earnest_money > 0">
          <td>Earnest Money</td>
          <td>{{loan.terms.earnest_money}}</td>
        </tr>
        <tr>
          <td>
            <strong>Estimated Amount Due At Closing:</strong>
          </td>
          <td>
            <strong>{{loan.terms.fees_at_closing}}</strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Max Loan Amount:</strong>
          </td>
          <td>
            <strong>{{loan.terms.loan_amount}}</strong>
          </td>
        </tr>
        <tr v-if="loan.terms.has_holdback == true">
          <td>Holdback:</td>
          <td>({{loan.terms.holdback}})</td>
        </tr>
        <tr v-if="loan.terms.funded_loan_amount !== 0">
          <td>Funded Loan Amount:</td>
          <td>{{loan.terms.funded_loan_amount}}</td>
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