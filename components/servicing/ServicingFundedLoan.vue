<template>
  <div>
    <VerstoneGrid :data="funded_loan">
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left" href="test"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="first_name" headerText="First Name" textAlign="Left"></e-column>
        <e-column field="last_name" headerText="Last Name" textAlign="Left"></e-column>
        <e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
        <e-column field="loan_city" headerText="Loan City" textAlign="Left"></e-column>
        <e-column field="loan_state" headerText="Loan State" textAlign="Left"></e-column>
        <e-column field="loan_zip" headerText="Loan Zipcode" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" textAlign="Left" :format="{ format: 'C2' }"></e-column>
        <e-column field="first_payment" headerText="First Payment" textAlign="Left"></e-column>
        <e-column field="next_due_date" headerText="Next Due Date" textAlign="Left"></e-column>
        <e-column field="default" headerText="Default" textAlign="Left"></e-column>
        <e-column field="foreclosure" headerText="Foreclosure" textAlign="Left"></e-column>
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
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
Vue.use(ButtonPlugin);

export default {
  props: ["funded_loan"],
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
        }
      ]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.funded_loan[rowIndex];
      this.$router.push("/loans/" + selectedData.id);
    },
    recordDoubleClick: function(e) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.funded_loan[rowIndex];
      this.$router.push("/loans/" + selectedData.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
