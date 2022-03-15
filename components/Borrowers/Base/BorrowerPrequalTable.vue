<template>
	<div>
		<b-card :title="`Prequals (${borrower.prequalifications.length})`">
			<b-card-text>
        <VerstoneGrid :data = "borrower.prequalifications"> 
          <e-columns>
            <e-column field="id" headerText="ID" textAlign="Left" width="100px"></e-column>                        
            <e-column field="app_date" headerText="Date" textAlign="Left" width="500px" type="date" :format='brrowerFormat'></e-column>
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
  data(){
    return{
      brrowerFormat:{type:'dateTime', format:'dd/MM/yyyy hh:mm a'}
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>