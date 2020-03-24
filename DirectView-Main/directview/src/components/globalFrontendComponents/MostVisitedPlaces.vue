<template>
	<div class="block-space bg-secondary">
		<div class="container">
			<div class="block-head text-center mb-5">
				<h2 class="head-line display-3">
					{{title}}
				</h2>
				<p class="lead mt-2 head-desc text-primary">{{desc}}</p>
			</div>
			<div class="row">
				<div class="col-md-12">
					<slick :options="slickOptions" v-if="data" class="simple-slick-carousel dots-nav">
						<template v-for="place in data">
							<div class="carousel-item" :key="place.title">
								<div class="category-box-container text-center">
									<div class="listing-item-container">
										<div class="listing-item text-center">
											<!-- <div class="mostviewed-bg" :style.background]="'url(' + place.image + ')'"> -->
											<div class="mostviewed-bg" :style="{'background': 'url(' + place.image + ')'}">
												<div class="listing-item-content">
													<div class="list-logo">
														<a> <img :src="place.logo" width="80" height="80" alt=""></a>
													</div>
													<span class="badge badge-pill badge-primary text-uppercase badge-cat category-banner">{{place.category}}</span>
													<a><h5 class="mb-0">{{place.title}} </h5></a>
													<p class="mb-0"> <small> {{place.address}}</small></p>
													<span class="badge badge-pill badge-success text-uppercase open-close-banner">{{place.badge}}</span>
												</div>
												<span class="round-pill like-banner d-block bg-primary"><i class="fa fa-heart-o"></i></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</template>
					</slick>
				</div>
			</div>
		</div>
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
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
            arrows: false,
             responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
         };
         
		}
	}
};
</script>
