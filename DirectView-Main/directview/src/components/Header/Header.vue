<!-- Header Structure -->
<template>
   <header class="header-global">
      <nav id="navbar-main" class="navbar navbar-main fixed-top navbar-expand-lg navbar-transparent navbar-light headroom">
         <div class="container">
            <div id="logo">
               <router-link to="/home"><img src="/static/images/logo-white.png" width="150" alt=""></router-link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global"
               aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar_global">
               <div class="navbar-collapse-header">
                  <div class="row">
                     <div class="col-6 collapse-brand">
                        <div id="logo">
                           <router-link to="/home"><img class="img-fluid" width="150" src="/static/images/logo-white.png" height="25" alt=""></router-link>
                        </div>
                     </div>
                     <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global"
                           aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="navbar-nav navbar-nav-hover align-items-lg-center ml-auto">
                  <ul class="m-0 p-0">
                     <app-menu></app-menu>
                  </ul>
                  <!-- <div class="header-widget">
                     <router-link to="/admin/add-list" class="btn btn-neutral btn-icon btn-radius">Add Listing <i class="fa fa-plus"></i></router-link>
                  </div> -->
               </div>
            </div>
         </div>
      </nav>
   </header>
</template>

<script>
import Menu from "Components/Menu/Menu.vue";
export default {
   components: {
      appMenu: Menu
   }
};
</script>
