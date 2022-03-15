<template>
  <div>
    <DashboardNav></DashboardNav>
    <b-card>
      <b-card-text>
        <strong>
          <Credit :all_credit="all_credit"></Credit>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import DashboardNav from "@/pages/dashboard/index.vue";
import Credit from "@/components/Dashboard/Credit.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Credit,
    DashboardNav
  },
  async fetch({ store, params }) {
    await store.dispatch("dashboard/GET_ALL_CREDIT");
  },
  computed: mapGetters({
    all_credit: "dashboard/all_credit"
  })
};
</script>

<style lang="scss" scoped>
</style>