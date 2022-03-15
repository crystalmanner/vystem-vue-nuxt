<template>
	<div>
		<b-card title="Entities">
			<b-card-text>
				<b-button variant="success" size="md" to="/entities/add">Add Entity</b-button>
				<EntitiesTable :entities="entities"></EntitiesTable>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import EntitiesTable from "@/components/Entities/EntitiesTable";
import { mapGetters } from "vuex";
export default {
	components: {
		EntitiesTable
	},
	async fetch({ store, params }) {
		await store.dispatch("entities/GET_ALL_ENTITY");
	},
	computed: mapGetters({
		entities: "entities/all_entities"
	})
};
</script>

<style lang="scss" scoped>
</style>