<template>
	<div class="block-space">
		<div class="container">
			<div class="row row-grid align-items-center">
				<div class="col-md-6 order-md-2">
					<img :src="image" class="img-fluid floating">
				</div>
				<div class="col-md-6 order-md-1">
					<div class="pr-md-5">
						<div class="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
							<i class="fa fa-cog"></i>
						</div>
						<h3>{{title}}</h3>
						<p>{{desc}}</p>
						<ul class="list-unstyled mt-5">
							<li class="py-2" v-for="feature in data" :key="feature.name">
								<div class="d-flex align-items-center">
									<div>
										<div class="badge badge-circle badge-success mr-3 p-0 wid-sq">
											<i :class="feature.icon" class="fa-2x"></i>
										</div>
									</div>
									<div>
										<h6 class="mb-0">{{feature.name}}</h6>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: ['title', 'desc', 'image', 'data']
};
</script>
