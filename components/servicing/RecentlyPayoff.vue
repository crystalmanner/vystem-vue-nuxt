<template>
  <div>
    <VerstoneGrid :data = "recently_paid_off"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" format="yMd" textAlign="Left"></e-column>
		<e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
		<e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
		<e-column field="loan_city" headerText="Loan City" textAlign="Left"></e-column>
		<e-column field="zip" headerText="Zip" textAlign="Left"></e-column>
		<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
		<e-column field="loan_status" headerText="Loan Status" textAlign="Left"></e-column>
		<e-column field="paid_off_date" headerText="Paid Off Date" textAlign="Left"></e-column>
		<e-column field="payment_type" headerText="Payment Type" textAlign="Left"></e-column>
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
  props: ['recently_paid_off'],
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
      var selectedData = this.recently_paid_off[rowIndex];        
      this.$router.push("/loans/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>