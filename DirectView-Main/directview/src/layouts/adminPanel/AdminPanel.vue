<!-- App Main Structure -->
<template>
	<div id="wrapper">
		<!-- Header of Admin Panel -->
		<app-admin-header></app-admin-header>
		<div class="clearfix"></div>
		<div id="dashboard">
			<!-- Sidebar of Admin Panel -->
			<app-admin-sidebar></app-admin-sidebar>
			<!--Main Container -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AdminHeader from "Components/AdminHeader/AdminHeader.vue";
import AdminSidebar from "Components/AdminSidebar/AdminSidebar.vue";

export default {
	components: {
		appAdminHeader : AdminHeader,
		appAdminSidebar : AdminSidebar
	}
};
</script>
