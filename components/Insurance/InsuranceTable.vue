<template>
  <div>
    <VerstoneGrid> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="expiration_date" headerText="Expiration Date" textAlign="Left"></e-column>
				<e-column field="maturity_date" headerText="Maturity Date" textAlign="Left"></e-column>
				<e-column field="loan_dot_item_address" headerText="Loan Dot Item Address" textAlign="Left"></e-column>
				<e-column field="loan_dot_item_city" headerText="Loan Dot Item City" textAlign="Left"></e-column>
        <e-column field="loan_dot_item_state" headerText="Loan Dot Item State" textAlign="Left"></e-column>
        <e-column field="loan_dot_item_zip" headerText="Loan Dot Item Zip" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>				
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
  // props: ['all_loans'],
  components: { 
    VerstoneGrid
  },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      isLoading: false
    };
  },
  methods: {
    onClick: function(args) { 
      this.isLoading = true;       
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));         
      var selectedData = this.all_loans[rowIndex];       
      this.$router.push("/loans/" + selectedData.loan_id);        
    }
  } 
};
</script>

<style lang="scss" scoped>
</style>