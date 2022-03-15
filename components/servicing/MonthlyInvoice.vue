<template>
  <div>
    <VerstoneGrid :data = "monthly_invoices"> 
      <e-columns>
        <e-column field="next_invoice_date" headerText="Next Invoice Date" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>            
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="interest_rate" headerText="Interest Rate" textAlign="Left"></e-column>
        <e-column field="current_principal" headerText="Principal" textAlign="Left"></e-column>
        <e-column field="monthly_payment" headerText="Monthly Payment" textAlign="Left"></e-column>
        <e-column field="fees" headerText="Fees" textAlign="Left"></e-column>
        <e-column field="total" headerText="Total" textAlign="Left"></e-column>
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
  props: ['monthly_invoices'],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      formatOptions: { format:'C2' , currency:'USD' }
    };
  },
  methods: {
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.monthly_invoices[rowIndex];       
      this.$router.push("/loans/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>