<template>
  <div>
    <VerstoneGrid :data="loan_extensions">
      <e-columns>
        <e-column field="id" headerText="ID" width="70"></e-column>
        <e-column field="extension_date" headerText="Extension Date" format="MM/dd/y" type="date"></e-column>
        <e-column
          field="original_maturity_date"
          headerText="Original Maturity Date"
          format="MM/dd/y"
          type="date"
        ></e-column>
        <e-column
          field="new_maturity_date"
          headerText="New Maturity Date"
          format="MM/dd/y"
          type="date"
        ></e-column>
        <e-column field="extension_days" headerText="Days"></e-column>
        <e-column field="extension_fee" headerText="Extension Fee" :format="formatOptions"></e-column>
        <e-column field="amount" headerText="Amount" :format="formatOptions"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Center"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import { parentsUntil, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
Vue.use(ButtonPlugin);

export default {
  props: ["loan_extensions"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [
        {
          buttonOption: {cssClass: "e-link btn-success", content: "View PDF", click: this.onClick }
        },
        {
          buttonOption: {cssClass: "e-link btn-success", content: "Send link", click: this.onClick }
        }
      ],
      formatOptions: { format:'C2' , currency:'USD' }
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.loan_extensions[rowIndex];
      this.$axios
        .get(`/v1/servicing/pdfs/extension-pdf/${this.$route.params.id}`)
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
