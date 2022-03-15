<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <RecentlyPayoff :recently_paid_off="recently_paid_off"></RecentlyPayoff>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import RecentlyPayoff from "@/components/servicing/RecentlyPayoff";
import { mapGetters } from "vuex";
export default {
  components: {
    RecentlyPayoff,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_RECENTLY_PAIDOFF");
  },
  computed: mapGetters({
    recently_paid_off: "servicing/recently_paid_off"
  })
};
</script>
<style lang="scss" scoped>
</style>