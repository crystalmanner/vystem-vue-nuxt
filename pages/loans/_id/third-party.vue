<template>
	<div>
		<b-row>
			<b-col cols="6">
				<TitleCard :loan="loan"></TitleCard>
			</b-col>
			<b-col cols="6">
				<EscrowCard :loan="loan"></EscrowCard>
			</b-col>
			<b-col cols="6">
				<InsuranceCard :loan="loan"></InsuranceCard>
			</b-col>
			<b-col cols="6">
				<ContractorCard :loan="loan"></ContractorCard>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import ContractorCard from "@/components/Loan/ThirdParty/ContractorCard";
import EscrowCard from "@/components/Loan/ThirdParty/EscrowCard";
import InsuranceCard from "@/components/Loan/ThirdParty/InsuranceCard";
import TitleCard from "@/components/Loan/ThirdParty/TitleCard";
import { mapGetters } from "vuex";
export default {
	props: ["loan"],
	components: {
		ContractorCard,
		EscrowCard,
		InsuranceCard,
		TitleCard
	}
};
</script>

<style lang="scss" scoped>
</style>