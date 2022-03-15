<template>
  <div>
    <VerstoneGrid :data = "draw_wire_requests"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>
				<e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>
				<e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
				<e-column field="loanstate" headerText="State" textAlign="Left"></e-column>
				<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
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
  props: ['draw_wire_requests'],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      formatOptions: { format:'C2' , currency:'USD' }
    };
  },
  methods: {
    onClick: function(args) { 
      this.isLoading = true       
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