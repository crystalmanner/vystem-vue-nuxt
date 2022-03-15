<template>
  <div>
    <VerstoneGrid :data = "recently_paid_off"> 
      <e-columns>
        <e-column field="id" headerText="ID" textAlign="Left"></e-column>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>
        <e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>        
        <e-column field="loan_state" headerText="Loan Status" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="payoff_date" headerText="Pay Off Date" textAlign="Left"></e-column>    
      </e-columns>     
    </VerstoneGrid>      
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
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