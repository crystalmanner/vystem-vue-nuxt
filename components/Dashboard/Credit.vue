<template>
  <div>
    <VerstoneGrid :data = "all_credit"> 
      <e-columns>
        <e-column field="first_name" headerText="First Name" width></e-column>
        <e-column field="last_name" headerText="Last Name" width></e-column>
        <e-column field="created_at" headerText="Date" width></e-column>
        <e-column field="pending_doc" headerText="Pending Docs" width></e-column>
        <e-column field="viewed" headerText="Viewed" width></e-column>
        <e-column field="user" headerText="Sales Rep" width></e-column>
      </e-columns>     
    </VerstoneGrid>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ["all_credit"],
  components: { VerstoneGrid },
  methods: {}
};
</script>
<style>
</style>
