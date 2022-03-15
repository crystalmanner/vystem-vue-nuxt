<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-body>
      <ReportNav></ReportNav>
      <OneZeroNineEightTable :one_zero_nine_eight="one_zero_nine_eight" />	
   </b-card-body>
  </b-card>	
</template>

<script>
import ReportNav from "@/components/servicing/Report/ReportNav.vue";
import OneZeroNineEightTable from "@/components/servicing/Report/OneZeroNineEightTable";
import ServicingNav from "@/components/servicing/ServicingNav";
import { mapGetters } from "vuex"
export default {
	components: {
    ServicingNav,
    ReportNav,
    OneZeroNineEightTable
  },
  async fetch({ store, params }) {    
    await store.dispatch("servicing/GET_ONE_ZERO_NINE_EIGHT");
  },
  computed: mapGetters({
    one_zero_nine_eight: "servicing/one_zero_nine_eight"    
  })
};
</script>
<style lang="scss" scoped>
</style>