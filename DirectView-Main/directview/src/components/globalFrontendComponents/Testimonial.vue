<template>
	<div class="block-space bg-secondary" >
		<!-- Info Section -->
		<div class="block-head text-center mb-5">
			<h2 class="head-line display-3"> {{title}} </h2>
			<div class="col-12 col-md-7 mx-auto">
				<p class="lead mt-2 head-desc">{{desc}}</p>
			</div>
		</div>
		<!-- Info Section / End -->
		<!-- Categories Carousel -->
		<div class="fullwidth-carousel-container margin-top-20">
			<slick :options="slickOptions" v-if="data" class="testimonial-carousel testimonials">
				<template v-for="testimonial in data">
					<div class="fw-carousel-review" :key="testimonial.name">
						<div class="testimonial-box">
							<div class="testimonial">{{testimonial.message}}</div>
						</div>
						<div class="testimonial-author">
							<img :src="testimonial.image" alt="">
							<h4>{{testimonial.name}} <span>{{testimonial.position}}</span></h4>
						</div>
					</div>
				</template>
			</slick>
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
				centerPadding: '34%',
				slidesToShow: 1,
				dots: true,
				arrows: false,
				responsive: [
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
			]};
		}
	}
};
</script>
