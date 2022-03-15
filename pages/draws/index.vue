<template>
	<div>
		<b-card title="Draw Queue">
			<b-card-text class="pt-3">
        <DrawsTable :all_draws = "all_draws" />	
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import DrawsTable from "@/components/Draw/DrawsTable.vue";

export default {
  components:{
    DrawsTable
  },
	async fetch({ store, params }) {
		await store.dispatch("draws/GET_DRAWS");
	},
	computed: mapGetters({
		all_draws: "draws/get_queue"
	})
};
</script>
<style>
</style>