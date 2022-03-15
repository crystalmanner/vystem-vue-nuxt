<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <Blacklist :blacklist="blacklist"></Blacklist>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import Blacklist from "@/components/servicing/Blacklist";
import { mapGetters } from "vuex";
export default {
  components: {
    Blacklist,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_BLACKLIST");
  },
  computed: mapGetters({
    blacklist: "servicing/blacklist"
  })
};
</script>
<style lang="scss" scoped>
</style>