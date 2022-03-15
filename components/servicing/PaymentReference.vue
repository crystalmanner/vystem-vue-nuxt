<template>
  <div>
    <VerstoneGrid :data = "payment_reference"> 
      <e-columns>
        <e-column field="payment_date" headerText="Payment Date" textAlign="Left"></e-column>
		<e-column field="payment_method" headerText="Payment Method"></e-column>
		<e-column field="remainder" headerText="Remainder" textAlign="Left"></e-column>
		<e-column field="memo" headerText="Memo"></e-column>
		<e-column field="notes" headerText="Notes"></e-column>
		<e-column field="total_amount" headerText="Total Amount"></e-column>
		<e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import Vue from "vue";
import {
  parentsUntil,
  CommandColumn
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
Vue.use(ButtonPlugin);

export default {
  props: ["loan", "payment_reference"],
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
      this.$router.push(
        `/loans/${
          this.loan.loan_detail.id
        }/servicing/receive-payment/previous_payments/${selectedData.id}/`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>