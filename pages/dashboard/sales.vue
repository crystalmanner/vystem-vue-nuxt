<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Sales :all_sales="all_sales" :all_loans="all_loans"></Sales>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Sales from "@/components/Dashboard/Sales.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Sales,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_SALES");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_sales: "dashboard/all_sales",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>