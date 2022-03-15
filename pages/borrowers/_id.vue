<template>
	<b-card>
		<BorrowerHeader :borrower="borrower" />
		<b-nav tabs class="mb-3">
			<b-nav-item :to="`/borrowers/${$route.params.id}/`" exact>Detail</b-nav-item>
			<b-nav-item :to="`/borrowers/${$route.params.id}/loans`">Loans</b-nav-item>
			<b-nav-item :to="`/borrowers/${$route.params.id}/prequals`">Prequals</b-nav-item>			
			<b-nav-item :to="`/borrowers/${$route.params.id}/documents`">Documents</b-nav-item>
			<b-nav-item :to="`/borrowers/${$route.params.id}/entities`">Entities</b-nav-item>
			<b-nav-item :to="`/borrowers/${$route.params.id}/notes`">Notes</b-nav-item>
			<b-nav-item :to="`/borrowers/${$route.params.id}/credit`">Credit</b-nav-item>
		</b-nav>

		<nuxt-child :key="$route.params.id" :borrower="borrower" />
	</b-card>
</template>

<script>
import { mapGetters } from "vuex";
import BorrowerHeader from "@/components/Borrowers/Base/BorrowerHeader";
export default {
	components: { BorrowerHeader },
	async fetch({ store, params }) {
		await store.dispatch("borrower/GET_BORROWER", params.id);
	},
	computed: mapGetters({
		borrower: "borrower/borrower"
	})
};
</script>

<style lang="scss" scoped>
</style>