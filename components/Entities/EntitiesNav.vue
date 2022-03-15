<template>
	<b-nav tabs small class="mb-3 text-uppercase">
		<b-nav-item :to="`/entities/${$route.params.id}`" exact>Details</b-nav-item>
		<b-nav-item :to="`/entities/${$route.params.id}/docs`" exact>Docs</b-nav-item>
		<b-nav-item :to="`/entities/${$route.params.id}/members`">Member/Manager</b-nav-item>
		<b-nav-item :to="`/entities/${$route.params.id}/loans`">Loans</b-nav-item>
		<b-nav-item :to="`/entities/${$route.params.id}/edit`">Edit</b-nav-item>
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