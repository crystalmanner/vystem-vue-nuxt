<template>
	<div class="mb-3">
		<b-row>
			<b-col>
				<div>
					<span
						class="pt-0 mt-0 mb-0 font-weight-bold lead"
					>{{borrower.detail.first_name}} {{borrower.detail.last_name}}</span>
				</div>
				<div>
					<SalesName :borrower="borrower" />
				</div>
			</b-col>
			<b-col class="text-right">
				<MaritalStatus :borrower="borrower" />
				<PrequalStatus :borrower="borrower" />
				<BorrowerBlacklisted :borrower="borrower" />
				<CreditRequested :borrower="borrower" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import PrequalStatus from "@/components/Borrowers/Base/PrequalStatus";
import BorrowerBlacklisted from "@/components/Borrowers/Base/BorrowerBlacklisted";
import MaritalStatus from "@/components/Borrowers/Base/MaritalStatus";
import SalesName from "@/components/Borrowers/Base/SalesName";
import CreditRequested from "@/components/Borrowers/Base/CreditRequested";
export default {
	props: ["borrower"],
	components: {
		PrequalStatus,
		BorrowerBlacklisted,
		MaritalStatus,
		SalesName,
		CreditRequested
	}
};
</script>

<style lang="scss" scoped>
</style>