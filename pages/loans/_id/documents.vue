<template>
  <div>
    <DocumentCard :document="document"></DocumentCard>
  </div>
</template>

<script>
import DocumentCard from "@/components/Loan/Documents/DocumentCard";
import { mapGetters } from "vuex";
export default {
  props: ["document"],
  components: {
    DocumentCard
  },
  // async fetch({ store, params }) {
  //   await store.dispatch("loans/GET_DOCUMENTS", params.id);
  // },
  // computed: mapGetters({
  //   document: "loans/documents"
  // }),
};
</script>

<style lang="scss" scoped>
</style>