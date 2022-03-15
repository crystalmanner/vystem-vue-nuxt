<template>
	<b-alert variant="primary" show>
		<h5>Secondary:</h5>
		<ul v-for="warning in loan.warnings.secondary" class="m-0 pl-3">
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