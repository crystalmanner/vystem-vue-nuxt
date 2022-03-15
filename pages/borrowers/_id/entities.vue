<template>
	<div>
		<BorrowerEntitiesTable :borrower="borrower" />
	</div>
</template>

<script>
import BorrowerEntitiesTable from "@/components/Borrowers/Base/BorrowerEntitiesTable";
export default {
	props: ["borrower"],
	components: {
		BorrowerEntitiesTable
	}
};
</script>

<style lang="scss" scoped>
</style>