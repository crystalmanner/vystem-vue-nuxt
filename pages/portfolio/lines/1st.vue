<template>
  <div>
    <card title="1st Security">
      <b-row>
        <SummaryCard :title="summary.count" subtitle="Loans Pledged" icon="nc-credit-card"></SummaryCard>
        <SummaryCard :title="summary.pledged" subtitle="Amount Pledged" icon="nc-bank"></SummaryCard>
        <SummaryCard
          :title="summary.borrowing_base"
          subtitle="Borrowing Base"
          icon="nc-preferences-circle-rotate"
        ></SummaryCard>
        <SummaryCard
          :title="summary.credit_limit"
          subtitle="Available on Line"
          icon="nc-chart-pie-36"
        ></SummaryCard>
      </b-row>
      <hr />
      <strong>
        <LoanTable :summary="summary"></LoanTable>
      </strong>
    </card>
  </div>
</template>

<script>
import SummaryCard from '@/components/portfolio/SummaryCard'
import LoanTable from '@/components/portfolio/LoanTable'
import { mapGetters } from 'vuex'

export default {
	components: {
		SummaryCard,
		LoanTable
	},
	async fetch({ store, params }) {
		await store.dispatch('lines/GET_1ST')
	},
	computed: mapGetters({
		summary: 'lines/first_security'
	})
}
</script>

<style lang="scss" scoped>
</style>