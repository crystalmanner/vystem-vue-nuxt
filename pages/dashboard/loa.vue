<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Loa :all_loa="all_loa" :all_loans="all_loans"></Loa>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Loa from "@/components/Dashboard/Loa.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Loa,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_LOA");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_loa: "dashboard/all_loa",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>