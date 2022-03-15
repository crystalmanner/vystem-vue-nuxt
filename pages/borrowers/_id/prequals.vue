<template>
	<div>
		<BorrowerPrequalTable :borrower="borrower" />
	</div>
</template>

<script>
import BorrowerPrequalTable from "@/components/Borrowers/Base/BorrowerPrequalTable";
export default {
	props: ["borrower"],
	components: {
		BorrowerPrequalTable
	}
};
</script>

<style lang="scss" scoped>
</style>