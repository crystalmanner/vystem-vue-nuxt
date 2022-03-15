<template>
	<div v-if="lastPosition >= 0">
		<b-card title="Credit Score">
			<b-card-text>
				<h3 class="font-weight-bold mb-0">{{credit_score}}</h3>
				<div class="text-muted text-uppercase font-weight-light">
					<small>Credit Score</small>
				</div>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
export default {
	props: ["borrower"],
	data() {
		return {
			credit_score: {},
			lastPosition: ""
		};
	},
	created() {
		this.lastPosition = this.borrower.credit.length - 1;
		this.credit_score = this.borrower.credit[
			this.lastPosition
		].client1_tri_merge_score;
	}
};
</script>

<style lang="scss" scoped>
</style>