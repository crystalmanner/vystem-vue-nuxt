<template>
	<div>
		<VerstoneGrid :data = "maturity_notice" :rowSelectedData='rowSelected'> 
			<e-columns>
				<e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="borrower" headerText="Borrower Name" textAlign="Left"></e-column>
				<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
				<e-column field="maturity_date" headerText="Maturity Date" format="C2" textAlign="Left"></e-column>
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
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
Vue.use(ButtonPlugin);

export default {
	props: ["maturity_notice"],
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
      formatOptions: { format: "C2", currency: "USD" }
		};
	},
	methods: {
		onClick: function(args) {
			var rowEle = parentsUntil(event.target, "e-row");
			var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
			var selectedData = this.maturity_notice[rowIndex];
			this.$axios
				.get(`/v1/servicing/pdfs/maturity-pdf/loans/${selectedData.id}`)
				.then(response => {
					window.open(`${response.data[0].data}`, "_blank");
				})
				.catch(error => {
					console.log(error);
				});
    },
    rowSelected: function(args) {            
      this.$router.push("/loans/" +args.data.id);             
    }
	}
};
</script>

<style lang="scss" scoped>
</style>