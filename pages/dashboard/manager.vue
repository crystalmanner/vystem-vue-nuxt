<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Manager :all_manager="all_manager" :all_loans="all_loans"></Manager>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Manager from "@/components/Dashboard/Manager.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Manager,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_MANAGER");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_manager: "dashboard/all_manager",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>