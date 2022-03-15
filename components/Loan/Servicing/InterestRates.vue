<template>
	<div class>
    <VerstoneGrid :data = "interest_rates"> 
      <e-columns>
				<e-column field="transaction_date" headerText="Transaction Date" textAlign="Left"></e-column>
				<e-column field="interest_rate" headerText="Interest Rate"></e-column>
				<e-column field="notes" headerText="Notes"></e-column>
      </e-columns>     
    </VerstoneGrid>		
	</div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
	props: ["interest_rates", "loan"],
	components: { VerstoneGrid },
	methods: {
		onClick: function(args) {
			var rowEle = parentsUntil(event.target, "e-row");
			var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
			var selectedData = this.interest_rates[rowIndex];
			this.$router.push("/loans/" + selectedData.id);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>