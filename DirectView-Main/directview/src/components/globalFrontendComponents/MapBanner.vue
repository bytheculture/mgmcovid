<template>
	<div>
		<div id="map-container" class="fullwidth-home-map" v-if="layout == 'header'">
			<gmap-map :center="centerLatLng" :zoom="9" scrollwheel="false"  style="height: 620px">
				<gmap-marker  v-for="(marker, index) in markers" :key="marker.title"  :position="marker.position" :icon="marker.icon"  >
					<gmap-info-window :opened="marker.infoWindowStatus" @closeclick="marker.infoWindowStatus=false">
						<div class="infoBox">
							<div class="map-box">
								<a class="listing-img-container">
									<img :src="marker.image" alt="">
									<div class="listing-item-content">
										<h3>{{marker.title}}</h3>
										<span><small>{{marker.address}}</small></span>
									</div>
								</a>
							</div>
						</div>
					</gmap-info-window>
				</gmap-marker>
			</gmap-map>
			<div class="map-banner">
			<div class="main-search-inner">
				<div class="container">
					<div class="row">
						<div class="col-md-12 grid-full-width page-search mb-3">
							<div class="main-search-input mt-0">
								<div class="col-lg-3 col-sm-12">
									<div class="form-group">
										<input type="text" placeholder="What are you looking for?" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-12">
									<div class="form-group">
										<input type="text" placeholder="Location" class="form-control">
									</div>
								</div>
								<div class="col-lg-3 col-sm-12">
									<select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
										<option selected>Choose...</option>
										<option value="1">Hotel</option>
										<option value="2">Bar</option>
										<option value="3">Food Courts</option>
									</select>
								</div>
								<div class="col-lg-3 col-sm-12 text-right">
									<a class="btn main-search-btn btn-radius btn-lg btn-primary text-white"><span class="btn-inner--text">Search</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		  </div>
		</div>

		<div id="map-container"  class="sidebar-marker" v-if="layout == 'sidebar'">
			<gmap-map :center="centerLatLng" :zoom="9" scrollwheel="false">
				 <gmap-marker v-for="(marker,index) in markers"  :key="index" :position="marker.position" :icon="marker.icon" :clickable="true" :draggable="false"  @click="openInfoWindow(marker)">
					<gmap-info-window :opened="marker.infoWindowStatus" @closeclick="marker.infoWindowStatus=false">
						<div class="infoBox">
							<div class="map-box">
								  <a class="listing-img-container">
										  <img :src="marker.image" alt="">
										  <div class="listing-item-content">
											  <h3>{{marker.title}}</h3>
											  <span><small>{{marker.address}}</small></span>
										  </div>
								  </a>
							</div>
					  </div>
				  </gmap-info-window>
				 </gmap-marker>
			</gmap-map>
		</div>
	</div>
</template>

<script>
export default {
	props: ['layout'],
	data(){
		return{
			centerLatLng: {
				lat : 40.80,
				lng : -73.70
			},

			markers : [
							{
								position: {
									lat:  40.94401669296697,
									lng:  -74.16938781738281
								},
								icon: '/static/images/rest.png',
								title    : 'Tom Restaurant',
								address  : '964 School Street, New York',
								image    : '/static/images/most-img-1.jpg',
								infoWindowStatus : false
							},
							{
								position: {
									lat:  40.77055783505125,
									lng:  -74.26002502441406
								},
								icon: '/static/images/shop.png',
								title    : 'Sticky Band',
								address  : 'Bishop Avenue, New York',
								image    : '/static/images/most-img-2.jpg',
								infoWindowStatus : false

							},
							{
								position: {
									lat:  40.7427837,
									lng:  -73.11445617675781
								},
								icon: '/static/images/rest.png',
								title    : 'Hotel Govendor',
								address  : '778 Country Street, New York',
								image    : '/static/images/most-img-3.jpg',
								infoWindowStatus : false
							},
							{
								position : {
									lat:  40.70437865245596,
									lng:  -73.98674011230469
								},
								icon: '/static/images/hotel.png',
								title    : 'Burger House',
								address  : '2726 Shinn Street, New York',
								image    : '/static/images/most-img-4.jpg',
								infoWindowStatus : false
							},
							{
								position: {
									lat:  40.641311,
									lng:  -73.778139
								},
								icon: '/static/images/hotel.png',
								title    : 'Burger House 2',
								address  : '1512 Duncan Avenue, New York',
								image    : '/static/images/most-img-6.jpg',
								infoWindowStatus : false
							},
							{
								position: {
									lat:  41.080938,
									lng:  -73.535957
								},
								icon: '/static/images/rest.png',
								title    : 'Think Coffee',
								address  : '215 Terry Lane, New York',
								image    : '/static/images/most-img-3.jpg',
								infoWindowStatus : false
							},
							{
								position: {
									lat:  41.079386,
									lng:  -73.519478
								},
								icon: '/static/images/hotel.png',
								title    : 'Think Coffee 2',
								address  : '215 Terry Lane, New York',
								image    : '/static/images/most-img-2.jpg',
								infoWindowStatus : false
							}
						]
		}
	},
	methods: {
		openInfoWindow(marker){
			marker.infoWindowStatus = true;
		}
	}
};
</script>
