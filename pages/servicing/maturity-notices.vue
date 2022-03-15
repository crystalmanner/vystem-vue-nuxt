<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <MaturityNotice :maturity_notice="maturity_notice"></MaturityNotice>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import MaturityNotice from "@/components/servicing/MaturityNotice";
import { mapGetters } from "vuex";
export default {
  components: {
    MaturityNotice,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_MATURITY_NOTICE");
  },
  computed: mapGetters({
    maturity_notice: "servicing/maturity_notice"
  })
};
</script>
<style lang="scss" scoped>
</style>