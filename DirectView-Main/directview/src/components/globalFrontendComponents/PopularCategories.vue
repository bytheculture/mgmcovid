<template>
	<div class="block-space">
		<div class="container">
			<div class="block-head text-center mb-5">
				<h2 class="head-line display-3">
					{{title}}
				</h2>
				<p class="lead mt-2 head-desc text-primary">{{desc}}</p>
			</div>
		</div>
		<!-- Categories Carousel -->
		<div class="fullwidth-carousel-container">
			<div class="fullwidth-slick-carousel category-carousel">
				<!-- Item -->
				<slick :options="slickOptions" v-if="data" class="fullwidth-slick-carousel category-carousel">
					<template v-for="item in data">
						<div class="fw-carousel-item slide" :key="item.title">
							<div class="category-box-container text-center">
								<div  class="category-box">
									<div class="category-box-content">
										<div class="icon-title">
											<i :class="item.icon"></i>
										</div>
										<a><h3>{{item.title}}</h3></a>
										<span> <small>{{item.subTitle}}</small> </span>
									</div>
									<div class="category-box-background" :style="{'background-image': 'url(' + item.image + ')'}">
									</div>
									<!-- <img :src="item.image"> -->
								</div>
							</div>
						</div>
					</template>
				</slick>
			</div>
		</div>
		<!-- Categories Carousel / End -->
	</div>
</template>

<script>
import Slick from "vue-slick";

export default {
	props: ['title', 'desc', 'data'],
	components: {
		Slick
	},
	computed: {
		slickOptions() {
			return {
						centerMode: true,
			        centerPadding: '15%',
			        slidesToShow: 3,
			        dots: true,
			        arrows: false,
			        responsive: [
			         {
			           breakpoint: 1441,
			           settings: {
			             centerPadding: '10%',
			             slidesToShow: 3
			           }
			         },
			         {
			           breakpoint: 1025,
			           settings: {
			             centerPadding: '10px',
			             slidesToShow: 2,
			           }
			         },
			         {
			           breakpoint: 767,
			           settings: {
			             centerPadding: '10px',
			             slidesToShow: 1
			           }
			         }
			        ]
			};
		}
	}
};
</script>
