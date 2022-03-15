<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Valuation :all_valuation="all_valuation" :all_loans="all_loans"></Valuation>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Valuation from "@/components/Dashboard/Valuation.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Valuation,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_VALUATION");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_valuation: "dashboard/all_valuation",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>