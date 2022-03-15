<template>
  <div>
    <VerstoneGrid :data = "insurance_expiration"> 
      <e-columns>
        <e-column field="sales_rep" headerText="Sales rep" textAlign="Left"></e-column>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="email_address" headerText="Email Address" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="loan_amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="lender" headerText="Render" textAlign="Left"></e-column>
        <e-column field="origination_fee" headerText="Original Fee" :format="formatOptions" textAlign="Left"></e-column>        
        <e-column field="%" headerText="%" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ['insurance_expiration'],
  components: { VerstoneGrid },
  data() {
    return {      
      formatOptions: { format:'C2' , currency:'USD' }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>