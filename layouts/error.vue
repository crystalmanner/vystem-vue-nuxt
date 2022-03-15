<template>
	<div id="404">
		<div class="fluid fill-height">
			<div class="align-center justify-center">
				<div
					data-color="black"
					class="error-page"
					data-image="/img/full-screen-image-1.jpg"
					style="background-image: url('/img/full-screen-image-1.jpg');"
				></div>
				<div class="text-md-center">
					<h1>An Error Occurred</h1>
					<h2 class="my-3 headline">{{error.message}}</h2>
					<button class="go_home" color="primary" @click="$router.go(-1)">Go Back</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["error"],
	methods: {
		goHome() {
			this.$router.push({ path: "/" });
		}
	},
	layout: "default" // you can set a custom layout for the error page
};
</script>
