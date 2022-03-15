<template>
  <div>
    <card :title="loan.loan_number">
      <b-row>
        <b-col>
          <card>
            <h6 class="text-muted">Subject Property</h6>
            <table class="table table-striped table-condensed">
              <tr>
                <td colspan="2">{{loan["property_address"]}}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </card>
        </b-col>
        <b-col>
          <card>
            <h6 class="text-muted">Borrower Information</h6>
            <table class="table table-striped table-condensed">
              <tr>
                <td>Client Name</td>
                <td>{{loan["client_name"]}}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <card>
            <h6 class="text-muted">Loan Information</h6>
            <table class="table table-striped table-condensed">
              <tr>
                <td nowrap>Loan Program</td>
                <td>{{loan["loan_program"]}}</td>
              </tr>
              <tr>
                <td>Loan Type</td>
                <td>{{loan["loan_type"]}}</td>
              </tr>
              <tr>
                <td>Draw Method :</td>
                <td>{{loan["draw_method"]}}</td>
              </tr>
            </table>
          </card>
        </b-col>
        <b-col>
          <card>
            <h6 class="text-muted">Loan Terms</h6>
            <table class="table table-striped table-condensed">
              <tr>
                <td>Loan Amount :</td>
                <td>{{loan["loan_amount"]}}</td>
              </tr>
              <tr>
                <td>Processing Fee :</td>
                <td>{{loan["processing_fee"]}}</td>
              </tr>
              <tr>
                <td>Loan Fee :</td>
                <td>{{loan["loan_fee"]}}</td>
              </tr>
              <tr>
                <td>Construction Holdback :</td>
                <td>{{loan["construction"]}}</td>
              </tr>
              <tr>
                <td>Loan Term :</td>
                <td>{{loan["loan_term"]}}</td>
              </tr>
              <tr>
                <td>Extension Term :</td>
                <td>{{loan["extension_term"]}}</td>
              </tr>
              <tr>
                <td>Interest Rates :</td>
                <td>{{loan["interest_rate"]}}</td>
              </tr>
              <tr>
                <td nowrap>Monthly Interest Payment :</td>
                <td>{{loan["monthly_interest_rate"]}}</td>
              </tr>
            </table>
          </card>
        </b-col>
      </b-row>
    </card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	async fetch({ store, params }) {
		await store.dispatch('loans/GET_LOAN', params.id)
	},
	computed: mapGetters({
		loan: 'loans/loan'
	})
}
</script>

<style lang="scss" scoped>
</style>