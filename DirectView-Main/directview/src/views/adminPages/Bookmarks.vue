<template>
   <div class="dashboard-content">
      <div class="row">
         <!-- Listings -->
         <div class="col-lg-12 col-md-12">
            <div class="dashboard-list-box mb-5">
               <div class="db-tile ">
                  <h4>Bookmarked Listings</h4>
               </div>
               <ul class="row border-grid">
                  <li class="col-sm-6 col-md-6 col-lg-6 py-4" v-for="bookmark in data" :key="bookmark.title">
                     <div class="media">
                        <img class="rounded-circle shadow-lg" width="80" height="80"    :src="bookmark.image">
                        <div class="media-body px-4">
                           <h5>{{bookmark.title}}</h5>
                           <p class="text-muted">{{bookmark.address}}</p>
                           <p>{{bookmark.review}}</p>
                           <button class="btn btn-sm btn-primary" type="button">Edit</button>
                           <button class="btn btn-sm btn-danger" type="button">Remove</button>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <!-- Copyrights -->
         <div class="col-md-12">
            <div class="copyrights">© 2019 DirectView. All Rights Reserved.</div>
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
                     image: '/static/images/dp-1.jpg',
                     title: 'Sticky Band',
                     address: 'Bishop Avenue, New York',
                     review: '(23 reviews)'
                  },
                  {
                     image: '/static/images/dp-2.jpg',
                     title: 'Burger House',
                     address: '2726 Shinn Street, New York',
                     review: '(31 reviews)'
                  },
                  {
                     image: '/static/images/dp-3.jpg',
                     title: 'Think Coffee',
                     address: '215 Terry Lane, New York',
                     review: '(23 reviews)'
                  },
                   {
                     image: '/static/images/dp-4.jpg',
                     title: 'Koenna Brew',
                     address: '3 Jane Lane, New York',
                     review: '(8.7k reviews)'
                  }
               ]
      }
   }
};
</script>
