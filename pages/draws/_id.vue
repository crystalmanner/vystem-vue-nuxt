<template>
	<div>
		<b-card title="Draw Request Details">
			<b-card-text class="pt-3">
				<nuxt-child :key="$route.params.id" :draw="draw" />
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	async fetch({ store, params }) {
		this.isLoading = true;
		await store.dispatch("draw/GET_DRAW", params.id);
		this.isLoading = false;
	},
	computed: mapGetters({
		draw: "draw/draw"
	})
};
</script>

<style lang="scss" scoped>
</style>