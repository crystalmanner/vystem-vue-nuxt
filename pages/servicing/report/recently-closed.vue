<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <RecentlyClosedTable :recently_closed="recently_closed" />	
   </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import RecentlyClosedTable from "@/components/servicing/Report/RecentlyClosedTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,
    ReportNav,
    RecentlyClosedTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_RECENTLY_CLOSED");
  },
  computed: mapGetters({
    recently_closed: "servicing/recently_closed"    
  })
};
</script>
<style lang="scss" scoped>
</style>