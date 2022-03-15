<template>
  <div>
    <VerstoneGrid :data = "sold_loan"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>            
        <e-column field="first_name" headerText="First Name" textAlign="Left"></e-column>
        <e-column field="last_name" headerText="Last Name" textAlign="Left"></e-column>
        <e-column field="loan_state" headerText="Loan State" textAlign="Left"></e-column>
        <e-column field="portfolio_status" headerText="Portfolio Status" textAlign="Left"></e-column>
        <e-column field="fund_2" headerText="Fund 2" textAlign="Left"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
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
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
Vue.use(ButtonPlugin);

export default {
  props: ['sold_loan'],
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
        var selectedData = this.sold_loan[rowIndex];
        this.$router.push("/loans/" + selectedData.id);        
    }
  } 
};
</script>

<style lang="scss" scoped>
</style>