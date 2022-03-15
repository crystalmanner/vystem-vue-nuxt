<template>
	<div>
		<Insurance></Insurance>
	</div>
</template>

<script>
import Insurance from "@/components/Loan/Insurance/Insurance.vue";
export default {
	props: ["loan"],
	components: {
		Insurance
	}
};
</script>

<style lang="scss" scoped>
</style>