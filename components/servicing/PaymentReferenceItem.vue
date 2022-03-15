<template>
  <div>
    <VerstoneGrid :data = "payment_reference_item"> 
      <e-columns>
        <e-column field="notes" headerText="Notes"></e-column>
        <e-column field="amount" headerText="Amount"></e-column>
      </e-columns>     
    </VerstoneGrid>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ["payment_reference_item"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "View Items",
            click: this.onClick
          }
        }
      ]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.payment_reference[rowIndex];
      this.$router.push();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>