<template>
	<div class="main-wrapper">
		<div class="fs-container row m-0">
			 <div class="fs-inner-container col-lg-6 content">
				 <div class="fs-content pt-5 px-5">
					 <!-- Search -->
					 <section class="search">
						 <div class="row">
							 <div class="col-md-12">
								 <!-- Row With Forms -->
								 <div class="row with-forms">
									 <!-- Main Search Input -->
									 <div class="col-md-6">
										 <div class="form-group">
											 <input type="text" placeholder="What are you looking for?" class="form-control form-control-alternative">
										 </div>
									 </div>
									 <!-- Main Search Input -->
									 <div class="col-md-6">
										 <div class="form-group">
											 <input type="text" placeholder="Location" class="form-control form-control-alternative">
										 </div>
									 </div>
								  
								 </div>
								 <a class="btn btn-primary" href="javascript:void(0);"> Search</a>
								 <!-- Row With Forms / End -->
							 </div>
						 </div>
					 </section>
					 <!-- Search / End -->
					 <section class="listings-container">
						 <!-- Sorting / Layout Switcher -->
						 <div class="row fs-switcher pt-4">
							 <div class="col-md-6">
								 <!-- Showing Results -->
								 <p class="showing-results">14 Results Found </p>
							 </div>
						 </div>
						 <!-- Listings -->
						 <div class="row fs-listings">
							 <!-- Listing Item -->
							 <div class="col-lg-12 col-md-12 mb-4" v-for="(list,index) in data" :key="index">
					




                     								<div class="listing-item-container list-layout mb-4">
									<div  class="listing-item">
										<!-- Image -->
										<div class="listing-item-image">
										  <router-link to="/listing/detail/version2"><img :src="list.image" alt=""></router-link> 
										</div>
										<!-- Content -->
										<div class="listing-item-content">
											<span class="badge badge-pill list-banner badge-success text-uppercase">{{list.badge}}</span>
											<div class="listing-item-inner">
													<!-- <Rating></Rating> -->
											<router-link to="/listing/detail/version2">  <h5>{{list.title}}</h5></router-link> 
                                 <div class="address-bar">
												<small>{{list.address}}</small>
                                 </div>
												<div class="mt-3"><span class="badge badge-pill badge-primary text-uppercase badge-cat">{{list.category}}</span></div>
											  
											</div>
											<span class="round-pill like-banner d-block bg-primary"><i class="fa fa-heart-o"></i></span>
										</div>
									</div>
								</div> 




							 </div>
							 <!-- Listing Item / End -->
						 </div>
						 <!-- Listings Container / End -->
						 <!-- Pagination Container -->
						 <div class="row fs-listings">
							 <div class="col-md-12">
								 <!-- Pagination -->
								 <div class="clearfix"></div>
								 <pagination></pagination>
								 <div class="clearfix"></div>
								 <!-- Pagination / End -->
							 </div>
						 </div>
						 <!-- Pagination Container / End -->
					 </section>
				 </div>
			 </div>
			 <div class="fs-inner-container col-lg-6 map-fixed">
				 <!-- Map -->
				 <map-banner layout="sidebar"></map-banner>
			 </div>
		 </div>
	</div>
</template>

<script>
import MapBanner from 'Components/globalFrontendComponents/MapBanner';
import Pagination from 'Components/globalFrontendComponents/Pagination';

import MyList from 'Data/listing.json';
export default {
	data(){
		return{
			data: MyList.data
		}
	},
	components: {
		MapBanner: MapBanner,
		Pagination:Pagination
	}
};
</script>
