<template>
  <div>
    <VerstoneGrid :data = "account_draws"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
        <e-column field="borrower" headerText="Borrower" textAlign="Left"></e-column>
        <e-column field="address" headerText="Address" textAlign="Left"></e-column>
        <e-column field="asking_amount" headerText="Asking Amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="inspection_status" headerText="Inspection Status" textAlign="Left"></e-column>            
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>
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
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

Vue.use(ButtonPlugin);

export default {
  props: ['account_draws'],
  components: { VerstoneGrid },
  data() {
    return {      
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],
      formatOptions: { format:'C2' , currency:'USD' }    
    };
  },
  methods:{
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));         
      var selectedData = this.account_draws[rowIndex];       
      this.$router.push("/draws/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>