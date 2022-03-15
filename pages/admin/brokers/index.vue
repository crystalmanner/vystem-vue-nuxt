<template>
  <b-card title="Brokers">
    <b-card-text>
      <strong>
        <Brokers :brokers="brokers"></Brokers>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import Brokers from "@/components/admin/Brokers";
import { mapGetters } from "vuex";
export default {
  components: {
    Brokers
  },
  async fetch({ store, params }) {
    await store.dispatch("admin/GET_BROKERS");
  },
  computed: mapGetters({
    brokers: "admin/brokers"
  })
};
</script>
<style lang="scss" scoped>
</style>