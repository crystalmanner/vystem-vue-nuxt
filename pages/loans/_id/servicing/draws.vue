<template>
	<div>
		<ServicingLoanNav></ServicingLoanNav>
		<div v-if="this.loan.loan_detail.holdback_funds != 0">
			<b-button variant="secondary" size="md" v-b-modal.add-draw>Apply Draw</b-button>
			<b-button variant="secondary" size="md" @click="pdf()">PDF</b-button>
			<TransactionForm @createItem="createItem" :loan="loan" :draws="draws"></TransactionForm>
		</div>
		<Draws :draws="draws" :loan="loan"></Draws>

		<div id="summary" class="pull-right">
			<table class="table">
				<tr>
					<th>Total Holdback:</th>
					<td>{{ draws.summary.beginning_balance | currency }}</td>
				</tr>
				<tr>
					<th>Total Draws:</th>
					<td>{{ draws.summary.total_withdrawls | currency }}</td>
				</tr>
				<tr>
					<th>Remaining:</th>
					<td>{{ draws.summary.remaining | currency }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import Draws from "@/components/Loan/Servicing/Transactions/Draws.vue";
import TransactionForm from "@/components/Loan/Servicing/Transactions/AddDrawForm.vue";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		ServicingLoanNav,
		Draws,
		TransactionForm
	},
	async fetch({ store, params }) {
		await store.dispatch("transaction/GET_DRAWS", params.id);
	},
	computed: mapGetters({
		draws: "transaction/draws",
		add_draw: "transaction/add_draw"
	}),
	methods: {
		createItem: async function(e) {
			await this.$store.dispatch("transaction/POST_ADD_DRAW", {
				id: this.$route.params.id,
				form: e
			});
			await this.$store.dispatch(
				"transaction/GET_DRAWS",
				this.$route.params.id
			);
		},
		pdf() {
			this.$axios
				.get(`/v1/servicing/pdfs/draws-pdf/loans/${this.$route.params.id}`)
				.then(response => {
					window.open(`${response.data[0].data}`, "_blank");
				})
				.catch(e => {
					this.formErrors.push(e);
				});
		}
	}
};
</script>

<style lang="scss" scoped></style>
