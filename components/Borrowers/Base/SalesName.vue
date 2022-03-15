<template>
	<span>
		<span class="badge p-2 badge-light">Salesperson: {{borrower.sales.name}}</span>
	</span>
</template>

<script>
export default {
	props: ["borrower"]
};
</script>

<style lang="scss" scoped>
</style>