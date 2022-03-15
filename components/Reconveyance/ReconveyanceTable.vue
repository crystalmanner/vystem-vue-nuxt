<template>
  <div>
    <VerstoneGrid> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>
				<e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>
				<e-column field="address" headerText="Address" textAlign="Left"></e-column>
				<e-column field="loanstate" headerText="State" textAlign="Left"></e-column>
        <e-column field="escrow" headerText="Escrow" textAlign="Left"></e-column>
        <e-column field="fund2_name" headerText="Fund2 Name" textAlign="Left"></e-column>
        <e-column field="refinance_type" headerText="Refinance Type" textAlign="Left"></e-column>
				<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="loan_program" headerText="Loan Program" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="projected_funding_date" headerText="Projected Funding Date" :format="formatOptions" textAlign="Left"></e-column>
        <e-column field="status" headerText="Statue" :format="formatOptions" textAlign="Left"></e-column>
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