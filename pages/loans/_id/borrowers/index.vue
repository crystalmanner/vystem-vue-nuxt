<template>
	<div>
		<b-card title="Borrowers">      
      <b-button variant="success" size="md" :to="`/loans/${this.loan.loan_detail.id}/borrowers/add_borrowers`">Add Borrowers</b-button>
			<b-card-text>
				<b-card sub-title="Primary" class="mt-2" v-if="loan.borrower.primary">
					<Primary :primary="loan.borrower.primary"></Primary>
				</b-card>
				<b-card sub-title="Spouse" v-if="loan.borrower.spouse">
					<Spouse :spouse="loan.borrower.spouse"></Spouse>
				</b-card>
				<b-card sub-title="Co-borrower" v-if="loan.borrower.co_borrower">
					<Co-Borrower :co_borrower="loan.borrower.co_borrower"></Co-Borrower>
				</b-card>
				<b-card sub-title="Entity(s)" v-if="loan.borrower.entity">
					<Entity :entity="loan.borrower.entity"></Entity>
				</b-card>
				<b-card sub-title="Guarantors" v-if="loan.borrower.guarantors">
					<Guarantor :guarantor="loan.borrower.guarantors"></Guarantor>
				</b-card>
				<b-card sub-title="Other Borrowers" v-if="loan.borrower.borrowers">
					<OtherBorrower :other_borrower="loan.borrower.borrowers"></OtherBorrower>
				</b-card>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
import Primary from "@/components/Loan/Borrower/Primary";
import Spouse from "@/components/Loan/Borrower/Spouse";
import CoBorrower from "@/components/Loan/Borrower/Co-Borrower";
import Entity from "@/components/Loan/Borrower/Entity";
import Guarantor from "@/components/Loan/Borrower/Guarantor";
import OtherBorrower from "@/components/Loan/Borrower/Other-Borrower";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		Primary,
		Spouse,
		CoBorrower,
		Entity,
		Guarantor,
		OtherBorrower
	},
	async fetch({ store, params }) {},
  computed: mapGetters({}),
  created(){
    console.log(this.loan.loan_detail.id);
  }
};
</script>

<style lang="scss" scoped>
</style>