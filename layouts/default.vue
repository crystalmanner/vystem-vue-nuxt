<template>
	<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
		<notifications></notifications>
		<side-bar>
			<!-- <user-menu></user-menu> -->
			<mobile-menu></mobile-menu>
			<template slot-scope slot="links">
				<sidebar-item
					:link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-chart-pie-35',
            path: '/dashboard/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'All Loans',
            icon: 'nc-icon nc-zoom-split',
            path: '/loans/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Borrowers',
            icon: 'nc-icon nc-circle-09',
            path: '/borrowers/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Entities',
            icon: 'nc-icon nc-badge',
            path: '/entities/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Draws',
            icon: 'nc-icon nc-bullet-list-67',
            path: '/draws/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Portfolio',
            icon: 'nc-icon nc-bag',
            path: '/portfolio/'
          }"
					@click.native="loadingportfolio"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Accounting',
            icon: 'nc-icon nc-money-coins',
            path: '/accounting/'
          }"
				></sidebar-item>
				<sidebar-item
					:link="{
            name: 'Servicing',
            icon: 'nc-icon  nc-notes',
            path: '/servicing/'
          }"
				></sidebar-item>

				<sidebar-item
					:link="{
            name: 'Admin',
            icon: 'nc-icon nc-settings-gear-64',
            path: '/admin/'
          }"
				></sidebar-item>

				<sidebar-item
					:link="{
            name: 'Secondary',
            icon: 'nc-icon nc-settings-gear-64',
            path: '/secondary/'
          }"
				></sidebar-item>

				<sidebar-item
					:link="{
            name: 'Insurance',
            icon: 'nc-icon nc-settings-gear-64',
            path: '/insurance/'
          }"
				></sidebar-item>

				<sidebar-item
					:link="{
            name: 'Reconveyance',
            icon: 'nc-icon nc-settings-gear-64',
            path: '/reconveyance/'
          }"
				></sidebar-item>
			</template>
		</side-bar>
		<div class="main-panel">
			<top-navbar></top-navbar>

			<dashboard-content @click.native="toggleSidebar"></dashboard-content>

			<content-footer></content-footer>
			<div class="vld-parent">
				<loading :active.sync="isLoading" :can-cancel="false"></loading>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			isLoading: false
		};
	},
	methods: {
		toggleSidebar() {
			if (this.$sidebar.showSidebar) {
				this.$sidebar.displaySidebar(false);
			}
		},
		loadingportfolio() {
			this.isLoading = true;
			setTimeout(() => {
				this.isLoading = false;
			}, 6000);
		}
	}
};
</script>

<style lang="scss" scoped></style>
