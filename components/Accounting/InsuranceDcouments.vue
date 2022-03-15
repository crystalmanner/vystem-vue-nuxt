<template>
  <div>
    <VerstoneGrid :data="insurance_documents">
      <e-columns>
        <e-column field="id" headerText="ID" textAlign="Left"></e-column>
        <e-column field="policy_number" headerText="Policy Number" textAlign="Left"></e-column>
        <e-column field="expiration_date" headerText="Expiration Date" textAlign="Left"></e-column>
        <e-column field="effective_date" headerText="Effective Date" textAlign="Left"></e-column>
        <e-column field="type" headerText="Type" textAlign="Left"></e-column>
        <e-column field="amount" headerText="Amount" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import { CommandColumn, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";

Vue.use(ButtonPlugin);

export default {
  props: ["insurance_documents"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "View PDF",
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
      var selectedData = this.insurance_documents[rowIndex];
      window.open(selectedData.s3_path, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>