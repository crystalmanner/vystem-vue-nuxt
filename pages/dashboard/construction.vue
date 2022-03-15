<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Construction :all_construction="all_construction" :all_loans="all_loans">></Construction>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Construction from "@/components/Dashboard/Construction.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Construction,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_CONSTRUCTION");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_construction: "dashboard/all_construction",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>