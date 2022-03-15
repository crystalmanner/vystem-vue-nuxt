<template>
  <div>
    <VerstoneGrid :data="commission">
      <e-columns>
        <e-column field="funded_date" headerText="Funded Date" textAlign="Left"></e-column>
        <e-column field="sales_rep" headerText="Sales Rep" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="LOA Name" textAlign="Left"></e-column>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Note Loan Amount" textAlign="Left"></e-column>
        <e-column field="lender" headerText="Lender" textAlign="Left"></e-column>
        <e-column field="escrow_auction" headerText="Escrow/Auction" textAlign="Left"></e-column>
        <e-column field="purchase_refi" headerText="Purchase/Refi" textAlign="Left"></e-column>
        <e-column field="purchase_price" headerText="Total Purchase Price" textAlign="Left"></e-column>
        <e-column field="downpayment" headerText="Down Payment" textAlign="Left"></e-column>
        <e-column field="downpayment_percent" headerText="Down Payment Percentage" textAlign="Left"></e-column>
        <e-column field="origination_fee_percent" headerText="Origination Fee%" textAlign="Left"></e-column>
        <e-column
          field="origination_fee_amount"
          headerText="Origination Fee Amount"
          textAlign="Left"
        ></e-column>
        <e-column field="funded_ltv" headerText="Funded LTV" textAlign="Left"></e-column>
        <e-column field="broker_fee" headerText="Broker Fee" textAlign="Left"></e-column>
        <e-column field="origination_fee" headerText="Net Origination Fee Amount" textAlign="Left"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";

export default {
  props: ["commission"],
  components: { VerstoneGrid },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>