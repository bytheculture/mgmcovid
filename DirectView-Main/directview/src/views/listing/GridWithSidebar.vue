<template>
	<div class="main-wrapper">
		<!--Title Bar -->
		<title-bar title="Grid Layout With Sidebar" subtitle="Explore New Places"></title-bar>
		<!-- Content -->
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-lg-9 col-md-8">
						<!-- Sorting / Layout Switcher -->
						<div class="row mb-4 ">
							<div class="col-md-6 col-xs-6">
								<!-- Layout Switcher -->
								<div class="layout-switcher">
									<a class="grid active">
										<span class="round-pill d-block"><i class="fa fa-th"></i></span>
									</a>
									<router-link to="/listing/list/with-sidebar" class="list">
									<span class="round-pill d-block"><i class="fa fa-align-justify"></i></span></router-link>
								</div>
							</div>
							<div class="col-md-3 col-xs-6 ml-auto">
								<!-- Sort by -->
								<div class="sort-by">
									<div>
										<select data-placeholder="Default order"  class="form-control custom-select">
											<option>Default Order</option>
											<option>Highest Rated</option>
											<option>Most Reviewed</option>
											<option>Newest Listings</option>
											<option>Oldest Listings</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<!-- Sorting / Layout Switcher / End -->
						<div class="row">
							<!-- Listing Item -->
							<div class="col-lg-6 col-md-12 grid-layout-list mb-4" v-for="(list,index) in data" :key="index">
								<div class="list-cap">
									<div class="list-cap-list mb-4">
                              <!-- <router-link to="/listing/detail/version1"></router-link> -->
                              <div class="img-list">
										  <img :src="list.image" alt="" class="img-fluid">
                              </div>
											<div class="list-cap-content list-cap-content--style">
                                    <span class="badge badge-pill badge-primary text-uppercase mr-2">{{list.badge}}</span>
												<span class="badge badge-pill badge-primary text-uppercase badge-cat">{{list.category}}</span>
												<!-- <Rating></Rating> -->
											<router-link to="/listing/detail/version1">	<h5 class="mt-2">{{list.title}}</h5></router-link>
												<div class="address-bar"> <p>{{list.address}}</p></div>
											</div>
										<span class="round-pill like-banner d-block bg-primary"><i class="fa fa-heart-o"></i></span>
									</div>
								</div>
							</div>
						<!-- Listing Item / End -->
						</div>
						<!-- Pagination -->
						<div class="clearfix"></div>
						<pagination></pagination>
						<!-- Pagination / End -->
					</div>
				<!-- Sidebar -->
				<div class="col-lg-3 col-md-4">
					<sidebar-layout-one></sidebar-layout-one>
				</div>
				<!-- Sidebar / End -->
			</div>
		</div>
	</div>
</div>
</template>

<script>
import TitleBar from 'Components/globalFrontendComponents/TitleBar';
import Pagination from 'Components/globalFrontendComponents/Pagination';
import SidebarLayoutOne from 'Views/listing/SidebarLayoutOne';

import MyList from 'Data/listing.json';
export default {
	data(){
		return{
			data: MyList.data
		}
	},
	components: {
		TitleBar: TitleBar,
		Pagination:Pagination,
		SidebarLayoutOne: SidebarLayoutOne
	}
};
</script>
