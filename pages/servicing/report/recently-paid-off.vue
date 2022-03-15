<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <RecentlyPaidOffdTable :recently_paid_off="recently_paid_off" />	
   </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import RecentlyPaidOffdTable from "@/components/servicing/Report/RecentlyPaidOffTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,    
    ReportNav,
    RecentlyPaidOffdTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_RECENTLY_PAID_OFF");
  },
  computed: mapGetters({
    recently_paid_off: "servicing/recently_paid_off"    
  })
};
</script>
<style lang="scss" scoped>
</style>