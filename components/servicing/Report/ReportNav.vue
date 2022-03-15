<template>
	<b-nav tabs small class="mb-3 text-uppercase">
		<b-nav-item :to="`/servicing/report`" exact>Reconciliation Report</b-nav-item>
		<b-nav-item :to="`/servicing/report/insurance-expiration`" exact>Insurance Expiration Report</b-nav-item>
		<b-nav-item :to="`/servicing/report/recently-funded`">Recently Funded</b-nav-item>
		<b-nav-item :to="`/servicing/report/recently-closed`">Recently Closed</b-nav-item>
        <b-nav-item :to="`/servicing/report/recently-paid-off`">Recently Paid Off</b-nav-item>
        <b-nav-item :to="`/servicing/report/1098s`">1098's</b-nav-item>        
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