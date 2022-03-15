<template>
  <div>
    <VerstoneGrid :data = "mailing_address"> 
      <e-columns>
        <e-column field="to" headerText="To" ></e-column>
        <e-column field="address" headerText="Address" ></e-column>            
        <e-column field="notes" headerText="Note" width=""></e-column>
        <e-column field="city" headerText="City" ></e-column>
        <e-column field="state" headerText="State" ></e-column>
        <e-column field="zipcode" headerText="Zipcode" ></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ['mailing_address'],
  components: { VerstoneGrid },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>