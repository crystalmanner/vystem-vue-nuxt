<template>
	<div>
		<ServicingLoanNav></ServicingLoanNav>
		<b-button variant="secondary" v-b-modal.add-statement>Add Statement</b-button>
		<AddStatement @addStatement="addStatement"></AddStatement>
		<Statements :all_statements="all_statements" :loan="loan"></Statements>
	</div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import Invoices from "@/components/Loan/Servicing/Invoices";
import PayoffStatement from "@/components/Loan/Servicing/AddPayoffStatementForm.vue";
import Statements from "@/components/Loan/Servicing/Statements";
import AddStatement from "@/components/Loan/Servicing/AddStatement.vue";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		Invoices,
		ServicingLoanNav,
		PayoffStatement,
		Statements,
		AddStatement
	},
	async fetch({ store, params }) {
		await store.dispatch("loan_servicing/GET_INVOICE", params.id);
		await store.dispatch("loan_servicing/GET_STATEMENTS", params.id);
	},
	computed: mapGetters({
		invoices: "loan_servicing/invoices",
		payoff_statement: "loan_servicing/add_payoff_statement",
		all_statements: "loan_servicing/all_statements",
		add_statement: "loan_servicing/add_statement"
	}),
	methods: {
		createItem: async function(e) {
			await this.$store.dispatch("loan_servicing/ADD_PAYOFF_STATEMENT", {
				id: this.$route.params.id,
				form: e
			});
			window.open(`${this.payoff_statement}`, "_blank");
		},
		addStatement: async function(e) {
			await this.$store.dispatch("loan_servicing/ADD_STATEMENT", {
				id: this.$route.params.id,
				form: e
			});
			await this.$store.dispatch(
				"loan_servicing/GET_STATEMENTS",
				this.$route.params.id
			);
		}
	}
};
</script>

<style lang="scss" scoped></style>
