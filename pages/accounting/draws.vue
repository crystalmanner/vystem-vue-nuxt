<template>
	<b-card>
		<AccountingTabs></AccountingTabs>
		<AccountingTable :account_draws="all_draws"></AccountingTable>
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import AccountingTable from "@/components/Accounting/AccountingTable";
import { mapGetters } from "vuex";
export default {
	components: {
    AccountingTabs,
    AccountingTable
	},
	async fetch({ store, params }) {
		await store.dispatch("draws/GET_DRAWS_QUEUE");
	},
	computed: mapGetters({
		all_draws: "draws/get_queue"
	})
};
</script>