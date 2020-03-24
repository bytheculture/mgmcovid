<template>
	<slick  :options="slickOptions" class="listing-slider mfp-gallery-container margin-bottom-0">
		<template v-for="(gallery,index) in data">
		   <div :key="index">
		      <a  :style="{'background-image': 'url(' + gallery.image + ')'}"  class="item mfp-gallery" title="Title 1"></a>
		    </div>
		</template>
	</slick>
</template>

<script>
import Slick from "vue-slick";
export default {
	props: ['data'],
	components:{
		Slick
	},
	computed: {
		slickOptions() {
			return {
	         centerMode: true,
	         centerPadding: '20%',
	         slidesToShow: 2,
	         responsive: [
	            {
	              breakpoint: 1367,
	              settings: {
	                centerPadding: '15%'
	              }
	            },
	            {
	              breakpoint: 1025,
	              settings: {
	                centerPadding: '0'
	              }
	            },
	            {
	              breakpoint: 767,
	              settings: {
	                centerPadding: '0',
	                slidesToShow: 1
	              }
	            }
	         ]  
			}
		}
	}
};
</script>
