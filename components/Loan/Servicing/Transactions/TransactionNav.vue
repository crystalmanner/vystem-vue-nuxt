<template>
	<b-nav tabs small class="mb-3 text-uppercase">
		<b-nav-item
			:to="`/loans/${$route.params.id}/servicing/transactions/general_ledger/`"
			exact
		>General Ledger</b-nav-item>
		<b-nav-item :to="`/loans/${$route.params.id}/servicing/transactions/draws/`">Draws</b-nav-item>
		<b-nav-item
			:to="`/loans/${$route.params.id}/servicing/transactions/interest_reserve/`"
		>Interest Reserve</b-nav-item>
	</b-nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a.nav-link {
	color: #ccc;
}
a.nav-link:hover {
	color: #000;
}
</style>