<template>
	<div>
		<nuxt-child :key="$route.params.id" :loan="loan" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	async fetch({ store, params }) {
		await store.dispatch("loans/GET_LOAN", params.id);
	},
	computed: mapGetters({
		loan: "loans/loan"
	})
};
</script>

<style lang="scss" scoped>
</style>