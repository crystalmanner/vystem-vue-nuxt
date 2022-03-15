<template>
	<div>
		<BorrowerDocumentsTable :borrower="borrower" />
	</div>
</template>

<script>
import BorrowerDocumentsTable from "@/components/Borrowers/Base/BorrowerDocumentsTable";
export default {
	props: ["borrower"],
	components: {
		BorrowerDocumentsTable
	}
};
</script>

<style lang="scss" scoped>
</style>