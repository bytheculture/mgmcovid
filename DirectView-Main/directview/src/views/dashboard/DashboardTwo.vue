<template>
	<div>
		<!-- Banner -->
		<map-banner layout="header" class="map-banner-page"></map-banner>

		<!-- Most Visited Places -->
		<most-visited-places :title="data.mostVisitedPlacesTitle" :desc="data.mostVisitedPlacesDesc" :data="data.places"></most-visited-places>

		<!-- Feature Section -->
		<feature-section :title="data.featureSectionTitle" 
							:desc="data.featureSectionDesc" 
							:image="data.featureSectionImage" 
							:data="data.features" >
		</feature-section>

		<!-- Testimonial Section -->
		<testimonial :title="data.testimonialTitle" :desc="data.testimonialDesc" :data="data.testimonials"></testimonial>

		<!-- Feature Grid Section -->
		<feature-grid-section	:title="data.featureGridTitle" 
										:desc="data.featureGridDesc"
										:data="data.featureGrids">
		</feature-grid-section>

		<!-- Parallax -->
		<parallax-section></parallax-section>

		<!-- Pricing Tables  -->
		<pricing></pricing>

		<!-- Recent Blog Posts -->
		<recent-blog :title="data.recentBlogTitle" :data="data.blogs"></recent-blog>
	</div>
</template>

<script>
import MapBanner from 'Components/globalFrontendComponents/MapBanner';
import MostVisitedPlaces from 'Components/globalFrontendComponents/MostVisitedPlaces';
import FeatureSection from 'Components/globalFrontendComponents/FeatureSection';
import Testimonial from 'Components/globalFrontendComponents/Testimonial';
import FeatureGridSection from 'Components/globalFrontendComponents/FeatureGridSection';
import ParallaxSection from 'Components/globalFrontendComponents/ParallaxSection';
import Pricing from 'Components/globalFrontendComponents/Pricing';
import RecentBlog from 'Components/globalFrontendComponents/RecentBlog';

import MyData from 'Data/dashboardtwo.json';
export default {
	data(){
		return{
			data: MyData.data
		}
	},
	components :{
		MapBanner: MapBanner,
		MostVisitedPlaces: MostVisitedPlaces,
		FeatureSection: FeatureSection,
		Testimonial: Testimonial,
		FeatureGridSection: FeatureGridSection,
		ParallaxSection : ParallaxSection,
		Pricing: Pricing,
		RecentBlog: RecentBlog
	}
};
</script>
