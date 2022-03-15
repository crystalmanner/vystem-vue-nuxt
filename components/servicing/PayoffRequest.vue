<template>
  <div>
    <VerstoneGrid :data="payoff_request">
      <e-columns>
        <e-column field="note_balance" headerText="Note Balance" textAlign="Left"></e-column>
        <e-column field="holdback_balance" headerText="Holdback Balance" textAlign="Left"></e-column>
        <e-column field="ir_balance" headerText="IR Balance" textAlign="Left"></e-column>
        <e-column field="late_fees" headerText="Late Fees" textAlign="Left"></e-column>
        <e-column field="recording_fee" headerText="Recording Fee" textAlign="Left"></e-column>
        <e-column field="reconveyance_fee" headerText="Reconveyance Fee" textAlign="Left"></e-column>
        <e-column field="processing_fee" headerText="Processing Fee" textAlign="Left"></e-column>
        <e-column field="unpaid_interest" headerText="Unpaid Interest" textAlign="Left"></e-column>
        <e-column field="other_fees" headerText="Other Fees" textAlign="Left"></e-column>
        <e-column field="notes" headerText="Notes" textAlign="Left"></e-column>
        <e-column field="day_of_per_diem" headerText="Day of per diem" textAlign="Left"></e-column>
        <e-column
          field="partial_month_interest"
          headerText="Partial Month Interest"
          textAlign="Left"
        ></e-column>
        <e-column field="total_payoff" headerText="Total Payoff" textAlign="Left"></e-column>
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
  props: ["payoff_request"],
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
        },
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "Clone",
            click: this.onClone
          }
        }
      ]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.payoff_request[rowIndex];
      this.$axios
        .get(`/v1/servicing/pdfs/payoff-pdf/loans/${selectedData.id}`)
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClone: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.payoff_request[rowIndex];
      this.$router.push(
        `/loans/${selectedData.id}/servicing/payoff?id=${
          selectedData.request_id
        }`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>