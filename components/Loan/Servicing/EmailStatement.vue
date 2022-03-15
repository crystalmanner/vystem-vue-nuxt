<template>
  <div>
    <VerstoneGrid :data = "email_statement"> 
      <e-columns>
        <e-column field="name" headerText="Name" ></e-column>           
        <e-column field="email" headerText="Email" width=""></e-column>        
        <e-column field="notes" headerText="Notes" ></e-column>      
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: [ 'email_statement' ],
  components: { VerstoneGrid },  
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>