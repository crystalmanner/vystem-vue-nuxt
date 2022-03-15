<template>
  <div>
    <VerstoneGrid :data = "recently_funded_loans"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
				<e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
				<e-column field="loan_state" headerText="Loan State" textAlign="Left"></e-column>
				<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
				<e-column field="loan_status" headerText="Loan Statue" textAlign="Left"></e-column>
        <e-column field="funding_date" headerText="Funding Date" textAlign="Left"></e-column>   
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>     				
      </e-columns>     
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import {
  CommandColumn,
  parentsUntil
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";

Vue.use(ButtonPlugin);

export default {
  props: ['recently_funded_loans', 'all_loans'],
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
      var selectedData = this.recently_funded_loans[rowIndex];  
      for(var i = 0; i<this.all_loans.length; i++){
        if(this.all_loans[i].loan_number == selectedData.loan_number){          
          this.$router.push("/loans/" + this.all_loans[i].loan_id);        
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>