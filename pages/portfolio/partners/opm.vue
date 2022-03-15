<template>
  <card title="OPM">
    <b-row>
      <SummaryCard :title="summary.count" subtitle="Loans Sold" icon="nc-grid-45"></SummaryCard>
      <SummaryCard :title="summary.count" subtitle="Amount Sold" icon="nc-grid-45"></SummaryCard>
      <SummaryCard :title="summary.count" subtitle="Pass Through" icon="nc-grid-45"></SummaryCard>
    </b-row>
    <hr>
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
    await store.dispatch('secondarypartners/GET_OPM')
  },
  computed: mapGetters({
    summary: 'secondarypartners/opm'
  })
}
</script>

<style lang="scss" scoped>
</style>