<template>
	<div class="main-wrapper">
		<!--Title Bar -->
		<title-bar title="List Layout With Sidebar" subtitle="Explore New places here"></title-bar>
		<!-- Content -->
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-lg-9 col-md-8 padding-right-30">
						<!-- Sorting / Layout Switcher -->
						<div class="row mb-4">
							<div class="col-md-6 col-xs-6">
								<!-- Layout Switcher -->
								<div class="layout-switcher">
									<router-link to="/listing/grid/with-sidebar" class="grid"> <span class="round-pill d-block"><i class="fa fa-th"></i></span></router-link>
									<a class="list active"><span class="round-pill d-block"><i class="fa fa-align-justify"></i></span></a>
								</div>
						</div>
						<div class="col-md-3 ml-auto col-xs-6">
							<!-- Sort by -->
							<div class="sort-by">
								<select data-placeholder="Default order" class="form-control form-control-alternative custom-select ">
									<option>Default Order</option>
									<option>Highest Rated</option>
									<option>Most Reviewed</option>
									<option>Newest Listings</option>
									<option>Oldest Listings</option>
								</select>
							</div>
						</div>
					</div>
					<!-- Sorting / Layout Switcher / End -->
					<div class="row">
						<!-- Listing Item -->
						<div class="col-lg-12 col-md-12" v-for="list of data" :key="list.title">
							<div class="listing-item-container list-layout mb-4">
								<div  class="listing-item">
									<!-- Image -->
									<div class="listing-item-image">
										<router-link to="/listing/detail/version1"> <img :src="list.image" alt=""></router-link>
									</div>
									<!-- Content -->
									<div class="listing-item-content">
										<span class="badge badge-pill list-banner badge-success text-uppercase">{{list.badge}}</span>
										<div class="listing-item-inner">
											<!-- <Rating></Rating> -->
											<router-link to="/listing/detail/version1">   <h5>{{list.title}}</h5></router-link>

                              
											   <div class="address-bar">  <small>{{list.address}}</small></div>
											<div class="mt-3"><span class="badge badge-pill badge-primary text-uppercase badge-cat">{{list.category}}</span></div>
									 
										</div>
										<span class="round-pill like-banner d-block bg-primary"><i class="fa fa-heart-o"></i></span>
									</div>
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
				<!-- Sidebar-->
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
