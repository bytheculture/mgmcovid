<template>
	<div>
	<star-rating :config="config"></star-rating> <span class="num-rate"></span>
	</div>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'
export default {
	data(){
		return{
			config: {
            rating: 4.7,
            style: {
                fullStarColor: '#ed8a19',
                emptyStarColor: '#737373',
                starWidth: 20,
                starHeight: 20
            }
         }
		}
	},
	components: {
		StarRating
	}
};
</script>
