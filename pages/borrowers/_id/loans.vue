<template>
	<div>
		<BorrowerLoanTable :borrower="borrower" />
	</div>
</template>

<script>
import BorrowerLoanTable from "@/components/Borrowers/Base/BorrowerLoanTable";
export default {
	props: ["borrower"],
	components: {
		BorrowerLoanTable
	}
};
</script>

<style lang="scss" scoped>
</style>