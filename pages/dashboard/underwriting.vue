<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Underwriting :all_underwriting="all_underwriting" :all_loans="all_loans"></Underwriting>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Underwriting from "@/components/Dashboard/Underwriting.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Underwriting,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_UNDERWRITING");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_underwriting: "dashboard/all_underwriting",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>