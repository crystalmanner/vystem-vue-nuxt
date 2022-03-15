<template>
  <div>
    <VerstoneGrid :data="forecasting">
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="funding_memo_date" headerText="Funding Memo Date" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" textAlign="Left"></e-column>
        <e-column field="holdback" headerText="Holdback" textAlign="Left"></e-column>
        <e-column field="funded_loan_amount" headerText="Funded Loan Amount" textAlign="Left"></e-column>
        <e-column field="interenal_payoff" headerText="Interenal Payoff" textAlign="Left"></e-column>
        <e-column field="wire_amount" headerText="Wire Amount" textAlign="Left"></e-column>
        <e-column field="secondary_status" headerText="Secondary Status" textAlign="Left"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";

export default {
  props: ["forecasting"],
  components: { VerstoneGrid },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>