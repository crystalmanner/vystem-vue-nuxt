<template>
  <span>
    <b-button variant="secondary" size="sm" v-b-modal.as-is-arv>As-Is/Arv</b-button>
    <AsIsArvModal :loan="loan"></AsIsArvModal>
  </span>
</template>

<script>
import AsIsArvModal from "@/components/Loan/Base/Header/AsIsArvModal";
export default {
  props: ["loan"],
  components: {
    AsIsArvModal
  }
};
</script>

<style lang="scss" scoped>
</style>