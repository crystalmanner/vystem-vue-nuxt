<template>
  <div>
    <VerstoneGrid :data="escrow_wire_request">
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="wiretoescrow" headerText="Escrow" textAlign="Left"></e-column>
        <e-column field="estimated_closing_date" headerText="Closing Date" textAlign="Left"></e-column>
        <e-column field="wire_request_status" headerText="Status" textAlign="Left"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
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
  props: ["escrow_wire_request"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "View Detail",
            click: this.onClick
          }
        },
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "Fund Loan",
            click: this.fundLoan
          }
        }
      ]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.escrow_wire_request[rowIndex];
      this.$router.push(`/accounting/escrow_wire_request/${selectedData.id}`);
    },
    fundLoan: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.escrow_wire_request[rowIndex];
      console.log(selectedData.id);
      this.$axios
        .post(`/v1/servicing/fund/${selectedData.id}`, {})
        .then(response => {
          this.$router.push(`/loans/${selectedData.id}/servicing/`);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>