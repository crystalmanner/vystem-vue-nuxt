<template>
	<div>
		<b-row>
			<b-col>
				<!-- Escrow -->
				<div v-if="loan.loan_detail.escrow_or_auction == 1">
					<!-- Purchase -->
					<div v-if="loan.loan_detail.loan_type_id == 0">
						<EscrowTermsForm :loan="loan"></EscrowTermsForm>
					</div>
					<!-- Refi -->
					<div v-if="loan.loan_detail.loan_type_id == 1">
						<RefiTermsForm :loan="loan"></RefiTermsForm>
					</div>
					<!-- Mod -->
					<div v-if="loan.loan_detail.loan_type_id == 2">
						<ModTermsForm :loan="loan"></ModTermsForm>
					</div>
				</div>
				<!-- Auction -->
				<div v-else>
					<AuctionTermsForm :loan="loan"></AuctionTermsForm>
				</div>
			</b-col>
			<b-col>
				<!-- Escrow -->
				<div v-if="loan.loan_detail.escrow_or_auction == 1">
					<!-- Purchase -->
					<div v-if="loan.loan_detail.loan_type_id == 0">
						<EscrowTerms :loan="loan"></EscrowTerms>
					</div>
					<!-- Refi -->
					<div v-if="loan.loan_detail.loan_type_id == 1">
						<RefiTerms :loan="loan"></RefiTerms>
					</div>
					<!-- Mod -->
					<div v-if="loan.loan_detail.loan_type_id == 2">
						<ModTerms :loan="loan"></ModTerms>
					</div>
				</div>
				<!-- Auction -->
				<div v-else>
					<AuctionTerms :loan="loan"></AuctionTerms>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import AuctionTerms from "@/components/Loan/Terms/Views/AuctionTerms.vue";
import EscrowTerms from "@/components/Loan/Terms/Views/EscrowTerms.vue";
import ModTerms from "@/components/Loan/Terms/Views/ModTerms.vue";
import RefiTerms from "@/components/Loan/Terms/Views/RefiTerms.vue";
import AuctionTermsForm from "@/components/Loan/Terms/Forms/AuctionTermsForm.vue";
import EscrowTermsForm from "@/components/Loan/Terms/Forms/EscrowTermsForm.vue";
import ModTermsForm from "@/components/Loan/Terms/Forms/ModTermsForm.vue";
import RefiTermsForm from "@/components/Loan/Terms/Forms/RefiTermsForm.vue";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		AuctionTerms,
		EscrowTerms,
		ModTerms,
		RefiTerms
	}
};
</script>

<style lang="scss" scoped>
</style>
