<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<div class="navbar-minimize">
				<button class="btn btn-outline btn-round btn-icon d-none d-lg-block" @click="minimizeSidebar">
					<i :class="$sidebar.isMinimized ? 'fa fa-ellipsis-v' : 'fa fa-navicon'"></i>
				</button>
			</div>
			<a class="navbar-brand uppercase">Loan Lookup:</a>
			<button
				type="button"
				class="navbar-toggler navbar-toggler-right"
				:class="{toggled: $sidebar.showSidebar}"
				aria-expanded="false"
				@click="toggleSidebar"
			>
				<span class="navbar-toggler-bar burger-lines"></span>
				<span class="navbar-toggler-bar burger-lines"></span>
				<span class="navbar-toggler-bar burger-lines"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end">
				<ul class="nav navbar-nav mr-auto">
					<form class="navbar-form navbar-left navbar-search-form" role="search">
						<div class="input-group">
							<vue-bootstrap-typeahead
								v-model="res"
								:data="loans"
								:serializer="item => item.loan_number"
								placeholder="Enter a Loan Number"
								@hit="selectedLoan($event)"
							></vue-bootstrap-typeahead>
						</div>
					</form>
				</ul>
				<ul class="navbar-nav ml-auto">
					<b-button class="btn-success" @click="refresh_page">Refresh</b-button>	
					<b-button class="btn-success" @click="back_page">Back</b-button>				
					<drop-down position="right">
						<i slot="title" class="nc-icon nc-bullet-list-67"></i>
						<nuxt-link to="/profile" class="dropdown-item text-success">
							<i class="nc-icon nc-circle-09"></i> Profile
						</nuxt-link>
						<nuxt-link to="/auth/logout" class="dropdown-item text-danger">
							<i class="nc-icon nc-button-power pt-1"></i> Log out
						</nuxt-link>
					</drop-down>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
	components: { VueBootstrapTypeahead },
	computed: {
		routeName() {
			const { name } = this.$route;
			return name.replace("-", " ");
		}
	},
	data() {
		return {
			activeNotifications: false,
			res: "",
			loans: [],
			result: []
		};
	},
	created() {
		this.$axios
			.get("/v1/portfolio/loan/detail/")
			.then(response => {
				this.loans = response.data[0]["data"].row;
			})
			.catch(error => {
				console.log(error);
			});
		this.$sidebar.toggleMinimize();
	},
	methods: {
		toggleNotificationDropDown() {
			this.activeNotifications = !this.activeNotifications;
		},
		closeDropDown() {
			this.activeNotifications = false;
		},
		toggleSidebar() {
			this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
		},
		hideSidebar() {
			this.$sidebar.displaySidebar(false);
		},
		minimizeSidebar() {
			this.$sidebar.toggleMinimize();
		},
		selectedLoan(event) {
			this.$router.push("/loans/" + event.loan_id);
		},
		refresh_page(){
			window.location.reload(true);
		},
		back_page(){
			this.$router.go(-1);
		}
	}
};
</script>
<style>
.capitalize {
	text-transform: capitalize;
}
</style>
