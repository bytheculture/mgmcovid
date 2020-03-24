<template>
	<div class="block-space bg-secondary">
		<div class="block-head text-center mb-5">
			<h2 class="head-line display-3">
				{{title}}
			</h2>
			<p class="lead mt-2 head-desc text-primary">Hassel Free Service</p>
		</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="row row-grid">
						<div class="col-lg-4" v-for="blog in data" :key="blog.title">
							<div class="card card-lift--hover shadow border-0">
								<img class="img-fluid" :src="blog.image" alt="">
								<div class="card-body py-4">
									<h5>{{blog.title}}</h5>
									<p class="text-muted">{{blog.date}}</p>
									<p class="description mb-4">{{blog.desc}}</p>
									<a class="btn btn-primary" href="javascript:void(0);">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: ['title', 'desc', 'data']
};
</script>
