<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <DrawRequest :draw_requests="draw_requests" :all_draws="all_draws"></DrawRequest>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import DrawRequest from "@/components/servicing/DrawRequest";
import { mapGetters } from "vuex";
export default {
  components: {
    DrawRequest,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_DRAW_REQUESTS");
    await store.dispatch("draws/GET_DRAWS");
  },
  computed: mapGetters({
    draw_requests: "servicing/draw_requests",    
    all_draws: "draws/get_queue"
  })
};
</script>
<style lang="scss" scoped>
</style>