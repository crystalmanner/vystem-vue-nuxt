<template>
	<div>
		<b-card title="Borrowers">
			<b-card-text>
				<b-button variant="success" size="md" to="/borrowers/add">Add Borrower</b-button>
			</b-card-text>
			<hr />
			<BorrowerTable :borrower="all_borrower" />
		</b-card>
	</div>
</template>
<script>
import BorrowerTable from "@/components/Borrowers/Base/BorrowerTable";
import { mapGetters } from "vuex";

export default {
	props: ["borrower"],
	components: {
		BorrowerTable
	},
	async fetch({ store, params }) {
		await store.dispatch("borrowers/GET_ALL_BORROWER");
	},
	computed: mapGetters({
		all_borrower: "borrowers/all_borrower"
	})
};
</script>

<style lang="scss" scoped>
</style>