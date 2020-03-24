<!-- App Main Structure -->
<template>
	<div id="wrapper"  :class="{'header-top': isListingPages()}">
		<!--Header Frontend Panel -->
		<app-header></app-header>

		<!-- Main Container -->
		<router-view></router-view>

		<!-- Footer Frontend Panel -->
		<app-footer v-if="isFooter"></app-footer>

	</div>
</template>

<script>
import Header from "Components/Header/Header.vue";
import Footer from "Components/Footer/Footer.vue";

export default {
	data() {
		return {
			isFooter : true,
			url : this.$route.path
		};
	},
	components: {
		appHeader: Header,
		appFooter: Footer
	},
	watch:{
		$route(){
			if (this.isFixedShow()) {
				this.isFooter = true;
			}
			else
			{
				this.isFooter = false;
			}
		}
	},
	methods:{
		isListingPages()
		{
			if(this.url == '/listing/half-map/grid' || this.url == '/listing/half-map/list')
			{
				return true;
			}
			else
			{
				return false;
			}
		},
		isFixedShow()
		{
			if (this.url == '/listing/half-map/grid' || this.url == '/listing/half-map/list') {
				return false;
			} else {
				return true
			}
		},
		onScrollEvent(){
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			if (scrollTop >= 200) {
				document.getElementById('wrapper').classList.add("header-fixed");
			} else {
				document.getElementById('wrapper').classList.remove("header-fixed");
			}
		}
	},
	created () {
		window.addEventListener('scroll', this.onScrollEvent);
	},
	destroyed () {
		window.removeEventListener('scroll', this.onScrollEvent);
	}
};
</script>
