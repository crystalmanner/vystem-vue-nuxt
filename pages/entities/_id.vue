<template>
	<b-card>
		<EntitiesNav></EntitiesNav>

		<nuxt-child :key="$route.params.id" :entity="entity" />
	</b-card>
</template>

<script>
import EntitiesNav from "@/components/Entities/EntitiesNav";
import { mapGetters } from "vuex";
export default {
	components: {
		EntitiesNav
	},
	async fetch({ store, params }) {
		await store.dispatch("entity/GET_ENTITY", params.id);
	},
	computed: mapGetters({
		entity: "entity/entity"
	})
};
</script>

<style lang="scss" scoped>
</style>