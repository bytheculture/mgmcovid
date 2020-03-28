<template>
	<div>
		<!-- Banner -->
		<banner-version-one :title="data.bannerTitle" :desc="data.bannerDesc" :bg-image-url="data.bannerImage"></banner-version-one>
		<googleSheet></googleSheet>

		<!-- Popular Categories -->
		<!-- <popular-categories :title="data.popularCategoriesTitle" :desc="data.popularCategoriesDesc" :data="data.categories"></popular-categories> -->

		<!-- Most Visited Places -->
		<!-- <most-visited-places :title="data.mostVisitedPlacesTitle" :desc="data.mostVisitedPlacesDesc" :data="data.places"></most-visited-places> -->

		<!-- Services Section -->
		<!-- <services-section :title="data.servicesTitle" :desc="data.servicesDesc" :data="data.services"></services-section> -->

		<!-- Team Section -->
		<!-- <team :title="data.teamSectionTitle" :desc="data.teamSectionDesc" :data="data.teamMembers"></team> -->

		<!-- Recent Blog Posts -->
		<!-- <recent-blog :title="data.recentBlogTitle" :data="data.blogs"></recent-blog> -->
	</div>
</template>

<script>
import Banner from 'Components/globalFrontendComponents/Banner';
// import PopularCategories from 'Components/globalFrontendComponents/PopularCategories';
// import MostVisitedPlaces from 'Components/globalFrontendComponents/MostVisitedPlaces';
// import Services from 'Components/globalFrontendComponents/Services';
// import Team from 'Components/globalFrontendComponents/Team';
// import RecentBlog from 'Components/globalFrontendComponents/RecentBlog';
import GSheetListing from 'Components/globalFrontendComponents/GSheetListing';

import MyData from 'Data/dashboardone.json';
export default {
	data(){
		return{
			data: MyData.data
		}
	},
	components :{
		bannerVersionOne: Banner,
		googleSheet: GSheetListing

		// PopularCategories : PopularCategories,
		// MostVisitedPlaces: MostVisitedPlaces,
		// ServicesSection: Services,
		// Team: Team,
		// RecentBlog: RecentBlog
	}
};
</script>
