<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <ReconciliationTable :reconciliation="reconciliation" />	
    </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import ReconciliationTable from "@/components/servicing/Report/ReconciliationTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,
    ReportNav,
		ReconciliationTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_RECONCILIATION");
  },
  computed: mapGetters({
    reconciliation: "servicing/reconciliation"    
  })
};
</script>
<style lang="scss" scoped>
</style>