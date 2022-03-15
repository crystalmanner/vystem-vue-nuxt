<template>
	<div>
    <VerstoneGrid :data = "interest_reserve.rows"> 
      <e-columns>
        <e-column field="id" headerText="ID" width="70"></e-column>
				<e-column field="transaction_date" headerText="Date" width="105" format="MM/dd/y" type="date"></e-column>
				<e-column field="note" headerText="Note" width></e-column>
				<e-column field="deposit" headerText="Deposit" :format="formatOptions" width="125"></e-column>
				<e-column field="withdrawl" headerText="Withdrawl" :format="formatOptions" width="125"></e-column>
				<e-column field="balance" headerText="Balance" :format="formatOptions" width="125"></e-column>
      </e-columns>     
    </VerstoneGrid>		
	</div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
export default {
  props: ["interest_reserve"],
  data(){
    return{
      formatOptions: { format:'C2' , currency:'USD' }
    }
  },
	components: { VerstoneGrid },
	computed: {},
	methods: {}
};
</script>

<style>
</style>
