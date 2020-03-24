<template>
	<div>
		<map-banner layout="header"></map-banner>
		<!-- Content -->
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<!-- Sorting - Filtering Section -->
						<div class="row my-4">
							<div class="col-md-6">
								<!-- Layout Switcher -->
								<div class="layout-switcher">
									<a class="grid active"><span class="round-pill d-block"><i class="fa fa-th"></i></span></a>
									<router-link to="/listing/list/full-width" class="list"><span class="round-pill d-block"><i class="fa fa-align-justify"></i></span></router-link>
								</div>
							</div>
						</div>
						<!-- Sorting - Filtering Section / End -->
						<div class="row">
							<!-- Listing Item -->
							<div class="col-lg-4 col-md-6 grid-layout-list" v-for="(list,index) in data" :key="index">
								


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
				</div>
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
