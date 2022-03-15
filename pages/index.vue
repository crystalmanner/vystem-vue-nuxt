<template>
	<div>
		<b-row>
			<b-col>
				<b-card title="Welcome to the Vystem v3">
					<b-card-text>
						<hr />
						<p>
							<small>Departments:</small>
						</p>
						<b-button variant="success" to="/servicing">Servicing</b-button>
						<b-button variant="success" size="md" to="/loans/">All Loans</b-button>
					</b-card-text>
				</b-card>
			</b-col>
			<b-col cols="3">
				<b-card title="Actions">
					<b-card-text></b-card-text>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
