<template>
	<b-alert variant="danger" show>
		<h5>Warning:</h5>
		<ul v-for="warning in loan.warnings.terms" class="m-0 pl-3">
			<li class>{{warning}}</li>
		</ul>
	</b-alert>
</template>

<script>
export default {
	props: ["loan"]
};
</script>

<style lang="scss" scoped>
</style>