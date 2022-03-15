<template>
	<div>
		<BorrowerCreditTable :borrower="borrower" />
	</div>
</template>

<script>
import BorrowerCreditTable from "@/components/Borrowers/Base/BorrowerCreditTable";
export default {
	props: ["borrower"],
	components: {
		BorrowerCreditTable
	}
};
</script>

<style lang="scss" scoped>
</style>