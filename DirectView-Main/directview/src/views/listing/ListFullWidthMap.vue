<template>
	<div>
		<map-banner layout="header"></map-banner>
		<!-- Content -->
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<!-- Listing Item -->
							<div class="col-lg-12 col-md-12" v-for="(list,index) in data" :key="index">
								<div class="listing-item-container list-layout mb-4">
									<div class="listing-item">
										<!-- Image -->
										<div class="listing-item-image">
											<img :src="list.image" alt="">
										</div>
										<!-- Content -->
										<div class="listing-item-content">
											<span class="badge badge-pill list-banner badge-success text-uppercase">{{list.badge}}</span>
											<div class="listing-item-inner">
												<!-- <Rating></Rating> -->
												<router-link to="/listing/detail/version2"><h5> {{list.title}}</h5></router-link>
												<div class="address-bar"><small>{{list.address}}</small></div>
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
						<div class="row">
							<div class="col-md-12">
								<!-- Pagination -->
								<pagination></pagination>
							</div>
						</div>
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
