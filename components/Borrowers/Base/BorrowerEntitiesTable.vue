<template>
	<div>
		<b-card :title="`Entities (${this.entities.length})`">
			<b-card-text>
        <VerstoneGrid :data = "this.entities"> 
          <e-columns>
            <e-column field="id" headerText="ID" width="100px" textAlign="Left"></e-column>                        
            <e-column field="name" headerText="Name" textAlign="Left"></e-column>           
          </e-columns>     
        </VerstoneGrid>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

export default {
  props: ["borrower"],
  components: { VerstoneGrid },
  data() {
    return {     
      entities: ""
    };
  },
	created() {
    this.entities = this.borrower.entities;
	}
};
</script>

<style lang="scss" scoped>
</style>