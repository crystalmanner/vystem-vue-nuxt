<template>
  <div>
    <VerstoneGrid :data = "one_zero_nine_eight"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
        <e-column field="loan_state" headerText="Loan State" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>        
        <e-column field="loan_status" headerText="Loan Status" textAlign="Left"></e-column>
        <e-column field="paid_off_date" headerText="Paid Off Date" textAlign="Left"></e-column>            
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ['one_zero_nine_eight'],
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