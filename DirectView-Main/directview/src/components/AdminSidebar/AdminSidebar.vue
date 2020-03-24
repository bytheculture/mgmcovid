<!-- Header Structure -->
<template>
<div class="app-admin-sidebar"> 
	<div class="db-admin">
		<div class="dashboard-nav">
			<div class="dashboard-nav-inner">
				<ul data-submenu-title="Main">
					<li class="active"><router-link to="/admin/dashboard"><i class="fa fa-tachometer"></i> Dashboard</router-link></li>
					<li><router-link to="/admin/messages"><i class="fa fa-inbox"></i> Messages <span class="nav-tag messages">2</span></router-link></li>
					<li><router-link to="/admin/bookings"><i class=" fa fa-calendar"></i> Bookings</router-link></li>
				</ul>
				<ul data-submenu-title="Listings">
					<li><router-link to="/admin/list"><i class="fa fa-calendar-check-o"></i> My Listing</router-link></li>
					<li><router-link to="/admin/reviews"><i class="fa fa-star"></i> Reviews</router-link></li>
					<li><router-link to="/admin/bookmarks"><i class="fa fa-bookmark"></i> Bookmarks</router-link></li>
					<li><router-link to="/admin/add-list"><i class="fa fa-calendar-plus-o"></i> Add Listing</router-link></li>
				</ul>
				<ul data-submenu-title="Account">
					<li><router-link to="/admin/profile"><i class="fa fa-user"></i> My Profile</router-link></li>
					<li><router-link to="/home'"><i class="fa fa-sign-out"></i> Logout</router-link></li>
				</ul>
			</div>
		</div>
	</div>
	<a class="db-trigger" @click="toggleMenu()">
		<i class="fa fa-reorder"></i>
	</a>
</div> 


</template>

<script>
export default {
	methods: {
		toggleMenu()
		{
			if ( $('#wrapper').hasClass( "sidebar-in" ) ) {
				$('#wrapper').removeClass("sidebar-in");
			}
			else
			{
				$('#wrapper').addClass("sidebar-in");
			}
		}
	}
};
</script>
