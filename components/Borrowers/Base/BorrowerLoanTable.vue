<template>
	<div>
		<b-card :title="`Loans (${borrower.loans.length})`"> 
			<b-card-text>
        <VerstoneGrid :data = "borrower.loans"> 
          <e-columns>
            <e-column field="loan_number" headerText="Loan Number" format="yMd"  textAlign="Left"></e-column>                        
            <e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
            <e-column field="loan_name" headerText="Loan Address" textAlign="Left"></e-column>            
            <e-column headerText="Action" :commands='commands' textAlign="Left"></e-column>
          </e-columns>     
        </VerstoneGrid>
        <div class="vld-parent">
          <loading :active.sync="isLoading" 
          :can-cancel="false">
          </loading>
        </div>        
			</b-card-text>
		</b-card>
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
  props: ["borrower"],
  components: { VerstoneGrid },
	data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],
      isLoading: false,
      formatOptions: { format:'C2' , currency:'USD' }
    };
  },
  methods: {
    onClick: function(args) {
      this.isLoading = true          
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.borrower.loans[rowIndex];     
      this.$router.push("/loans/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>