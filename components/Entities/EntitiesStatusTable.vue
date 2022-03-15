<template>
	<div>
		<b-card>
			<b-card-text>
        <VerstoneGrid :data = "this.entities"> 
          <e-columns>
            <e-column field="item" headerText="Item" textAlign="Left"></e-column>                                    
            <e-column field="status" headerText="Statue" textAlign="Left"></e-column>         
          </e-columns>     
        </VerstoneGrid>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
	props: ["entities"],
  data() {
    return {      
      credit: ""
    };
  },
  methods: {
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.entities[rowIndex];           
      this.$router.push("/entities/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>