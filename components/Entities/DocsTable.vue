<template>
	<div>
		<b-card>
			<b-card-text>
        <VerstoneGrid :data = "this.docs"> 
          <e-columns>
            <e-column field="details" headerText="Details" textAlign="Left"></e-column>                        
            <e-column field="loans" headerText="Loans" textAlign="Left"></e-column>
            <e-column field="members" headerText="Members" textAlign="Left"></e-column>            
            <e-column field="documents" headerText="Documents" textAlign="Left"></e-column>                     
            <e-column field="credit_notes" headerText="Credit Notes" textAlign="Left"></e-column>         
            <e-column field="uploads" headerText="Uploads" textAlign="Left"></e-column>         
            <e-column field="status" headerText="Status" textAlign="Left"></e-column>     
          </e-columns>     
        </VerstoneGrid>        
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
	props: ["docs"],
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>