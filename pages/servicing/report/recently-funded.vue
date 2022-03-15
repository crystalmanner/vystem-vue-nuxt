<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <RecentlyFundedTable :recently_funded="recently_funded" />	
   </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import RecentlyFundedTable from "@/components/servicing/Report/RecentlyFundedTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,
    ReportNav,
    RecentlyFundedTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_RECENTLY_FUNDED");
  },
  computed: mapGetters({
    recently_funded: "servicing/recently_funded"    
  })
};
</script>
<style lang="scss" scoped>
</style>