<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Processing :all_processing="all_processing" :all_loans="all_loans"></Processing>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Processing from "@/components/Dashboard/Processing.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Processing,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_PROCESSING");
    await store.dispatch("loans/GET_ALL_LOAN");
  },
  computed: mapGetters({
    all_processing: "dashboard/all_processing",
    all_loans: "loans/all_loans"
  })
};
</script>

<style lang="scss" scoped>
</style>