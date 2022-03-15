<template>
	<div>
		<b-row>
			<b-col>
				<OutgoingWire :loan="loan" />
			</b-col>
			<b-col>
				<LoanServicingSetup :loan="loan" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import OutgoingWire from "@/components/Loan/Terms/OutgoingWire.vue";
import LoanServicingSetup from "@/components/servicing/SetupLoan.vue";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: { LoanServicingSetup, OutgoingWire }
};
</script>

<style lang="scss" scoped>
</style>