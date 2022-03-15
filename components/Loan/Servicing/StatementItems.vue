<template>
  <div class>
    <VerstoneGrid :data = "all_statement_items"> 
      <e-columns>
        <e-column field="transaction_date" headerText="Transaction Date" textAlign="Left"></e-column>
        <e-column field="type" headerText="Type" textAlign="Left"></e-column>
        <e-column field="notes" headerText="Notes" textAlign="Left"></e-column>
        <e-column field="amount" headerText="Amount" textAlign="Left"></e-column>
        <e-column field="balance" headerText="Balance" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ["all_statement_items", "loan"],
  components: { VerstoneGrid },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>