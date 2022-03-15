<template>
	<div class="">
    <VerstoneGrid :data = "invoices"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" ></e-column>            
        <e-column field="date" headerText="Date"  textAlign="Left"></e-column>
        <e-column field="last_name" headerText="Last Name"  ></e-column>
        <e-column field="amount" headerText="Amount"  ></e-column>
        <e-column field="principal" headerText="Principal" ></e-column>
        <e-column field="drawn_holdback" headerText="Drawn Holdback"></e-column>
        <e-column field="total" headerText="Total" format="C2" ></e-column>
        <e-column field="paid_date" headerText="Paid Date" format="C2" ></e-column>
        <e-column field="status" headerText="Status" format="C2" ></e-column>
        <e-column field="monthly_payment" headerText="Monthly Payment" format="C2" ></e-column>
        <e-column field="paid" headerText="Paid" format="C2" ></e-column>
        <e-column headerText="Action" :commands='commands' textAlign="Left"></e-column>
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
	props: ["invoices", "loan"],
	components: { VerstoneGrid },
	data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }] 
    };
  },
  methods: {
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.invoices[rowIndex];
      this.$router.push("/loans/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>