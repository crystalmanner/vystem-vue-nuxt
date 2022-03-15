<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <InsuranceExpirationTable :insurance_expiration="insurance_expiration" />	
   </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import InsuranceExpirationTable from "@/components/servicing/Report/InsuranceExpirationTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,
    ReportNav,
    InsuranceExpirationTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_INSURANCE_EXPIRATION");
  },
  computed: mapGetters({
    insurance_expiration: "servicing/insurance_expiration"    
  })
};
</script>
<style lang="scss" scoped>
</style>