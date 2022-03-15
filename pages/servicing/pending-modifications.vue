<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <PendingModification :pending_modifications="pending_modifications"></PendingModification>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import PendingModification from "@/components/servicing/PendingModification";
import { mapGetters } from "vuex";
export default {
  components: {
    PendingModification,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_PENDING_MODIFICATIONS");
  },
  computed: mapGetters({
    pending_modifications: "servicing/pending_modifications"
  })
};
</script>
<style lang="scss" scoped>
</style>