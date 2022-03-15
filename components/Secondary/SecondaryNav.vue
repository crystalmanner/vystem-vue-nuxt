<template>
	<b-nav tabs small class="mb-3 text-uppercase">
		<b-nav-item :to="`/secondary`" exact>Limbo</b-nav-item>
		<b-nav-item :to="`/secondary/summary`">Summary</b-nav-item>
		<b-nav-item :to="`/secondary/1-fund`">Fund1</b-nav-item>
    <b-nav-item :to="`/secondary/pending`" exact>Pending</b-nav-item>
    <b-nav-item :to="`/secondary/columbia`" exact>Columbia</b-nav-item>
    <b-nav-item :to="`/secondary/nw`" exact>NW</b-nav-item>
    <b-nav-item :to="`/secondary/1-security`" exact>1st Security</b-nav-item>
    <b-nav-item :to="`/secondary/opm`" exact>OPM</b-nav-item>
    <b-nav-item :to="`/secondary/smith_graham`" exact>Smith Graham</b-nav-item>
    <b-nav-item :to="`/secondary/clearning_conditions_required`" exact>Clearning Conditions Required</b-nav-item>
    <b-nav-item :to="`/secondary/pending_pledge`" exact>Pending Pledge</b-nav-item>
    <b-nav-item-dropdown id="my-nav-dropdown" text="Other" toggle-class="nav-link-custom">        
        <b-dropdown-item>Apple Equities</b-dropdown-item>
        <b-dropdown-item>VDV</b-dropdown-item>
        <b-dropdown-item>DV</b-dropdown-item>        
        <b-dropdown-item>Golden Qifang</b-dropdown-item>
        <b-dropdown-item>George R. Osbome</b-dropdown-item>
        <b-dropdown-item>Dow</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Past Tapes</b-dropdown-item>
      </b-nav-item-dropdown>
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