<template>
	<b-nav tabs small class="mb-3 text-uppercase">
		<b-nav-item :to="`/loans`" exact>All Loans</b-nav-item>
		<b-nav-item :to="`/loans/recently_funded`">Recently Funded</b-nav-item>
		<b-nav-item :to="`/loans/recently_paid_off`">Recently Paid-Off</b-nav-item>
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