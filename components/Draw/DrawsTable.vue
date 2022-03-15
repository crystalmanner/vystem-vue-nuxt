<template>
  <div>
    <VerstoneGrid :data = "all_draws"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number"></e-column>
        <e-column field="borrower" headerText="Borrower"></e-column>
        <e-column field="address" headerText="Address"></e-column>
        <e-column field="asking_amount" :format="formatOptions" headerText="Requested Amount"></e-column>
        <e-column field="inspection_status" headerText="Inspection Status"></e-column>
        <e-column field="status" headerText="Status"></e-column>
        <e-column field="client_requested_date" headerText="Client Requested Date"></e-column>
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
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";

Vue.use(ButtonPlugin);

export default {
  props: ['all_draws'],
  components: { VerstoneGrid },
  data() {
		return {
			commands: [
				{
					buttonOption: {
						cssClass: "e-link btn-success",
						content: "View Detail",
						click: this.onClick
					}
				}
      ],
      formatOptions: { format:'C2' , currency:'USD' }
		};
	},
  methods: {
		onClick: function(args) {
			var rowEle = parentsUntil(event.target, "e-row");
			var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
			var selectedData = this.all_draws[rowIndex];
			// this.$router.push(
			// `/loans/${selectedData.loan_id}/servicing/draws/${selectedData.id}`
			// );
			this.$router.push(`/draws/${selectedData.id}`);
		}
  }
}
</script>