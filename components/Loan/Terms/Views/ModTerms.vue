<template>
  <b-card :title="`${loan.terms.loan_number} Mod Terms`">
    <br>
    <b-card-text>
      <table class="table table-striped">
        <tr>
          <td>
            <strong>Current Note Amount:</strong>
          </td>
          <td>
            <strong>{{loan.terms.mod_previous_loan_amount}}</strong>
          </td>
        </tr>
        <tr>
          <td class="indent">+ Additional Holdback:</td>
          <td>{{loan.terms.mod_additional_holdback}}</td>
        </tr>
        <tr>
          <td class="indent">+ Additional Interest Reserve:</td>
          <td>{{loan.terms.mod_additional_ir}}</td>
        </tr>
        <tr>
          <td class="indent">+ Cash Out</td>
          <td>{{loan.terms.cash_out}}</td>
        </tr>
        <tr>
          <td class="indent">+ Original Holdback</td>
          <td>{{loan.terms.mod_original_holdback}}</td>
        </tr>
        <tr v-if="loan.terms.finance_mod_fee_switch == true">
          <td class="indent">+ Mod Fee:</td>
          <td>{{loan.terms.mod_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_processing_fee_switch == true">
          <td class="indent">+ Processing Fee:</td>
          <td>{{loan.terms.processing_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_title_fees_switch == true">
          <td class="indent">+ Title Fee:</td>
          <td>{{loan.terms.title_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_past_due_interest_switch == true">
          <td class="indent">+ Interest Due:</td>
          <td>{{loan.terms.mod_past_due_interest}}</td>
        </tr>
        <tr v-if="loan.terms.finance_misc_fees_switch == true">
          <td class="indent">+ Misc Fee:</td>
          <td>{{loan.terms.mod_misc_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_late_fees_switch == true">
          <td class="indent">+ Late Fee:</td>
          <td>{{loan.terms.mod_late_fees}}</td>
        </tr>
        <tr>
          <td>
            <strong>Max Loan Amount:</strong>
          </td>
          <td>
            <strong>{{loan.terms.loan_amount}}</strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Original Holdback:</strong>
          </td>
          <td>
            <strong>{{loan.terms.mod_previous_holdback}}</strong>
          </td>
        </tr>
        <tr v-if="loan.terms.interest_type == 'Drawn'">
          <td class="indent">Total Holdback:</td>
          <td class="text-danger">({{loan.terms.holdback}})</td>
        </tr>
        <tr>
          <td>
            <strong>Funded Loan Amount:</strong>
          </td>
          <td>
            <strong>{{loan.terms.funded_loan_amount}}</strong>
          </td>
        </tr>
        <tr v-if="loan.terms.finance_mod_fee_switch == false">
          <td class="indent">+ Mod Fee:</td>
          <td>{{loan.terms.mod_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_processing_fee_switch == false">
          <td class="indent">+ Processing Fee:</td>
          <td>{{loan.terms.processing_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_title_fees_switch == false">
          <td class="indent">+ Title Fee:</td>
          <td>{{loan.terms.title_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_past_due_interest_switch == false">
          <td class="indent">+ Interest Due:</td>
          <td>{{loan.terms.mod_past_due_interest}}</td>
        </tr>
        <tr v-if="loan.terms.finance_misc_fees_switch == false">
          <td class="indent">+ Misc Fee:</td>
          <td>{{loan.terms.mod_misc_fee}}</td>
        </tr>
        <tr v-if="loan.terms.finance_late_fees_switch == false">
          <td class="indent">+ Late Fee:</td>
          <td>{{loan.terms.mod_late_fees}}</td>
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
          <td>Current Maturity Date:</td>
          <td>{{loan.terms.mod_previous_maturity_date}}</td>
        </tr>
        <tr>
          <td class="indent">+ Additional Loan Term</td>
          <td>{{loan.terms.loan_term}} Days</td>
        </tr>
        <tr>
          <td>New Maturity Date:</td>
          <td>{{loan.terms.loan_maturity_date}}</td>
        </tr>
        <tr>
          <td>Extension Loan Term:</td>
          <td>{{loan.terms.extension_term}} Days</td>
        </tr>
        <tr>
          <td>New Interest Rate:</td>
          <td>{{loan.terms.interest_rate}}</td>
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