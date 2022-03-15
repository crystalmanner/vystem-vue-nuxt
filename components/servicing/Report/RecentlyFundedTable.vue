<template>
  <div>
    <VerstoneGrid :data = "recently_funded"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="loan_amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="loan_status" headerText="Loan Status" textAlign="Left"></e-column>
        <e-column field="funding_date" headerText="Funding Date" textAlign="Left"></e-column>      
      </e-columns>     
    </VerstoneGrid>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
export default {
  props: ['recently_funded'],
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