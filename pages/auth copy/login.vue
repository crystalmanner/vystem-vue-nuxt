<template>
	<div>
		<div class="wrapper wrapper-full-page">
			<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute">
				<div class="container">
					<div class="navbar-wrapper"></div>
					<div id="navbar" class="navbar-collapse justify-content-end" style="display: none;"></div>
				</div>
			</nav>
			<div data-color="black" class="full-page login-page">
				<div class="content">
					<div class="container">
						<div class="row d-flex justify-content-center align-items-center">
							<div class="col-lg-4 col-md-6 col-sm-8">
								<form @submit.stop.prevent="login">
									<div
										class="card"
										style="opacity: 1; transform: translate3d(0px, 0px, 0px); transition: all 0.3s ease-in 0s;"
									>
										<div class="card-header">
											<div>
												<h3 class="card-title text-center">Vystem Login</h3>
											</div>
										</div>
										<div class="card-body">
											<b-alert v-if="error" show variant="danger">{{ error + '' }}</b-alert>
											<div>
												<div class="form-group has-label">
													<label>Email address</label>
													<input
														aria-describedby="addon-right addon-left"
														placeholder="Enter email"
														type="email"
														v-model="email"
														class="form-control"
														required
													/>
												</div>
												<div class="form-group has-label">
													<label>passsword</label>
													<input
														aria-describedby="addon-right addon-left"
														type="password"
														v-model="password"
														placeholder="Password"
														class="form-control"
														required
													/>
												</div>
											</div>
											<div class="text-center">
												<button type="submit" class="btn btn-fill btn-success btn-wd">Login</button>
												<br />
												<div class="forgot"></div>
											</div>
										</div>									
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="vld-parent">
						<loading :active.sync="isLoading" 
						:can-cancel="false">
						</loading>
					</div>
				</div>
				<footer class="footer footer-transparent">
					<div
						class="container d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center"
					>
						<div class="copyright">© 2019 Veristone</div>
					</div>
				</footer>
				<div class="full-page-background" style="background-image: url(&quot;/img/office.jpg&quot;);"></div>
			</div>
		</div>
		<div class="collapse navbar-collapse off-canvas-sidebar"></div>
	</div>
</template>
<script>
export default {
	layout: "auth",
	data() {
		return {
			email: "",
			password: "",
			loading: false,
			error: null,
			isLoading: false
		};
	},
	methods: {
		notifyVue(type, message) {
			this.$notify({
				title: message,
				type: type
			});
		},
		login: function() {
			this.isLoading = true
			this.$auth
				.loginWith("local", {
					data: {
						email: this.email,
						password: this.password
					}
				})
				.catch(e => {
					this.isLoading = false
					this.error = e + "";
				});
		}
	}
};
</script>