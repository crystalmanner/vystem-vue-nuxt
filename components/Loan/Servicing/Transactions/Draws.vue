<template>
	<div>
    <VerstoneGrid :data = "draws.draws" :rowData='rowDataBound'> 
      <e-columns>
        <e-column field="id" headerText="ID" width="100"></e-column>
				<e-column field="transaction_date" headerText="Date" width="150" format="MM/dd/y" type="date"></e-column>
				<e-column field="type" headerText="Type" width></e-column>
				<e-column headerText="Action" :commands="commands" textAlign="Left" width="125"></e-column>
				<e-column field="deposit" headerText="Deposit" :format="formatOptions" width="125"></e-column>
				<e-column field="withdrawl" headerText="Withdrawl" :format="formatOptions" width="125"></e-column>
				<e-column field="balance" headerText="Balance" :format="formatOptions" width="125"></e-column>
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
	props: ["draws", "loan"],
	components: { VerstoneGrid },
	data() {
		return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],
      formatOptions: { format:'C2' , currency:'USD' }
		};
	},
	methods: {
		onClick: function(args) {
			var rowEle = parentsUntil(event.target, "e-row");
			var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
			var selectedData = this.draws.draws[rowIndex];
			this.$router.push(`/draws/${selectedData.id}`);
    },
    rowDataBound: function(args) {
      if (args.data['type'] != 'Draw') {
        args.row.classList.add('showbtn');
      } 
    }
	}
};
</script>

<style>
</style>
