<template>
  <div>
    <VerstoneGrid :data = "recently_paid_off"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
        <e-column field="loan_state" headerText="Loan State" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="loan_city" headerText="Loan City" textAlign="Left"></e-column>            
        <e-column field="loan_zipcode" headerText="Loan Zipcode" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>
        <e-column field="payoff_date" headerText="Payoff Date" textAlign="Left"></e-column>
        <e-column field="loan_type_name" headerText="Loan Type Name" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>

import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

export default {
  props: ['recently_paid_off'],
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