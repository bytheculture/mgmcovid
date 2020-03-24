<template>
   <div class="dashboard-content">
      <div class="row responsive-row">
         <!-- Listings -->
         <div class="col-lg-12 col-md-12">
            <div class="dashboard-list-box mb-5">
               <div class="db-tile ">
                  <h4>Active Listings</h4>
               </div>
               <ul class="row border-grid">
                  <li class="col-sm-6 col-md-6 col-lg-6" v-for="list in data" :key="list.title">
                     <div class="list-box-listing">
                        <div class="list-box-listing-img"><a><img :src="list.image" alt=""></a></div>
                        <div class="list-box-listing-content">
                           <div class="inner">
                              <h3><a >{{list.title}}</a></h3>
                              <span>{{list.address}}</span>
                              <div class="star-rating" data-rating="5">
                                 <div class="rating-counter">{{list.review}}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="btn-g pt-4">
                        <a  class="btn btn-sm btn-primary text-white"><i class="sl sl-icon-note"></i> Edit</a>
                        <a  class="btn btn-sm btn-danger text-white"><i class="sl sl-icon-close"></i> Delete</a>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
         data : [
                     {
                        badge    : 'Open',
                        category : 'Eat & Drink',
                        title    : 'Cafe Bar',
                        address  : 'Wall Street, New York',
                        image    : '/static/images/most-img-1.jpg',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Coming Soon',
                        category : 'Concert',
                        title    : 'Milky Ducth',
                        address  : 'MayLand Square, LA',
                        image    : '/static/images/most-img-2.jpg',
                        review   : '(23 reviews)'
                     },
                     {
                        badge    : 'Open',
                        category : 'Hotels',
                        title    : 'Maledy Hotels',
                        address  : '672, CreedWay, New York',
                        image    : '/static/images/most-img-3.jpg',
                        review   : '(17 reviews)'
                     },
                     {
                        badge    : 'Open',
                        category : 'Eat & Drink',
                        title    : 'Donuts Hub',
                        address  : '56,Hihu Pora, New York',
                        image    : '/static/images/most-img-4.jpg',
                        review   : '(31 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Airport',
                        title    : 'NYC',
                        address  : 'Mill Dee, New York',
                        image    : '/static/images/most-img-4.jpg',
                        review   : '(46 reviews)'
                     },
                     {
                        badge    : 'Closed',
                        category : 'Eat & Drink',
                        title    : 'Groos Day',
                        address  : '71,Rowling Street, New York',
                        image    : '/static/images/most-img-6.jpg',
                        review   : '(15 reviews)'
                     }

                  ]
      }
   }
};
</script>
