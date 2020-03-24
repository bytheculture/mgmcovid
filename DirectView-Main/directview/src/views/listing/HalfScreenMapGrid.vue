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
