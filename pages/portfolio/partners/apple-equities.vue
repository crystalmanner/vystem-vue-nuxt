<template>
  <card title="Apple Equities">
    <b-row>
      <SummaryCard :title="summary.count" subtitle="Loans Sold" icon="nc-grid-45"></SummaryCard>
      <SummaryCard :title="summary.sold" subtitle="Amount Sold" icon="nc-grid-45"></SummaryCard>
      <SummaryCard :title="summary.passthrough" subtitle="Avg Pass Through" icon="nc-grid-45"></SummaryCard>
    </b-row>
    <hr />
    <strong>
      <LoanTable :summary="summary"></LoanTable>
    </strong>
  </card>
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
		await store.dispatch('secondarypartners/GET_APPLE_EQUITIES')
	},
	computed: mapGetters({
		summary: 'secondarypartners/apple_equities'
	})
}
</script>

<style lang="scss" scoped>
</style>