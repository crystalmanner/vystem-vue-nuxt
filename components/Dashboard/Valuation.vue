<template>
  <div>
    <VerstoneGrid :data = "all_valuation"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number"></e-column>
        <e-column field="client" headerText="Client"></e-column>
        <e-column field="address" headerText="Address"></e-column>
        <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions"></e-column>
        <e-column field="loan_program" headerText="Loan Program"></e-column>
        <e-column field="funding_date" headerText="Project Funding Date"></e-column>
        <e-column field="sales_rep" headerText="Sales Rep"></e-column>
        <e-column field="loan_type" headerText="Loan Type"></e-column>
        <e-column field="time" headerText="Time in Queue"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>
    <div class="vld-parent">
      <loading :active.sync="isLoading" 
        :can-cancel="false">
      </loading>
    </div>
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
  props: ["all_valuation", "all_loans"],
  components: { VerstoneGrid },  
  data(){
    return{
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      isLoading: false,
      formatOptions: { format:'C2' , currency:'USD' }
    }
  },
  methods: {
    onClick: function(args) { 
      this.isLoading = true;       
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));         
      var selectedData = this.all_valuation[rowIndex];   
      for(var i=0; i<this.all_loans.length; i++){
        if(this.all_loans[i].loan_amount == selectedData.loan_amount){
          this.$router.push("/loans/" + this.all_loans[i].loan_id);   
        }
      }     
    }
  }
};
</script>
<style>
</style>
