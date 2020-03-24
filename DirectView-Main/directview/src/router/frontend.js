import FrontendPanel from 'Layout/frontendPanel/FrontendPanel'

// dashboard components
const DashboardOne = () => import('Views/dashboard/DashboardOne');
const DashboardTwo = () => import('Views/dashboard/DashboardTwo');
const Pricing = () => import('Views/pages/Pricing');
const Invoice = () => import('Views/pages/Invoice');
const Booking = () => import('Views/pages/Booking');
const AddListing = () => import('Views/pages/AddListing');
const UserProfile = () => import('Views/pages/UserProfile');
const BlogList = () => import('Views/pages/BlogList');
const BlogDetail = () => import('Views/pages/BlogDetail');
const About = () => import('Views/pages/About');
const Contact = () => import('Views/pages/Contact');
const ListWithSidebar = () => import('Views/listing/ListWithSidebar');
const ListFullWidth = () => import('Views/listing/ListFullWidth');
const ListFullWidthMap = () => import('Views/listing/ListFullWidthMap');
const GridWithSidebar = () => import('Views/listing/GridWithSidebar');
const GridFullWidth = () => import('Views/listing/GridFullWidth');
const GridFullWidthMap = () => import('Views/listing/GridFullWidthMap');
const HalfScreenMapList = () => import('Views/listing/HalfScreenMapList');
const HalfScreenMapGrid = () => import('Views/listing/HalfScreenMapGrid');
const ListingDetailOne = () => import('Views/listing/ListingDetailOne');
const ListingDetailTwo = () => import('Views/listing/ListingDetailTwo');

export default {
   path: '/',
   component: FrontendPanel,
   redirect: '/home',
   children: [
      {
         path: '/home',
         component: DashboardOne,
         meta: {
            title: 'Home'
         }
      },
      {
         path: '/home/version1',
         component: DashboardOne,
         meta: {
            title: 'Home'
         }
      },
      {
         path: '/home/version2',
         component: DashboardTwo,
         meta: {
            title: 'Home 2'
         }
      },
      {
         path: '/pages/pricing',
         component: Pricing,
         meta: {
            title: 'Pricing'
         }
      },
      {
         path: '/pages/invoice',
         component: Invoice,
         meta: {
            title: 'Invoice'
         }
      },
      {
         path: '/pages/booking',
         component: Booking,
         meta: {
            title: 'Booking'
         }
      },
      {
         path: '/pages/add-listing',
         component: AddListing,
         meta: {
            title: 'Add Listing'
         }
      },
      {
         path: '/pages/user-profile',
         component: UserProfile,
         meta: {
            title: 'User Profile'
         }
      },
      {
         path: '/pages/blog/list',
         component: BlogList,
         meta: {
            title: 'Blog List'
         }
      },
      {
         path: '/pages/blog/detail',
         component: BlogDetail,
         meta: {
            title: 'Blog Detail'
         }
      },
      {
         path: '/pages/about-us',
         component: About,
         meta: {
            title: 'About Us'
         }
      },
      {
         path: '/pages/contact-us',
         component: Contact,
         meta: {
            title: 'Contact Us'
         }
      },
      {
         path: '/listing/list/with-sidebar',
         component: ListWithSidebar,
         meta: {
            title: 'List With Sidebar'
         }
      },
      {
         path: '/listing/list/full-width',
         component: ListFullWidth,
         meta: {
            title: 'List Full Width'
         }
      },
      {
         path: '/listing/list/full-width-map',
         component: ListFullWidthMap,
         meta: {
            title: 'List Full Width Map'
         }
      },
      {
         path: '/listing/grid/with-sidebar',
         component: GridWithSidebar,
         meta: {
            title: 'Grid With Sidebar'
         }
      },
      {
         path: '/listing/grid/full-width',
         component: GridFullWidth,
         meta: {
            title: 'Grid Full Width'
         }
      },
      {
         path: '/listing/grid/full-width-map',
         component: GridFullWidthMap,
         meta: {
            title: 'Grid Full Width Map'
         }
      },
      {
         path: '/listing/half-map/list',
         component: HalfScreenMapList,
         meta: {
            title: 'Half Screen Map List'
         }
      },
      {
         path: '/listing/half-map/grid',
         component: HalfScreenMapGrid,
         meta: {
            title: 'Half Screen Map Grid'
         }
      },
      {
         path: '/listing/detail/version1',
         component: ListingDetailOne,
         meta: {
            title: 'Listing Detail One'
         }
      },
      {
         path: '/listing/detail/version2',
         component: ListingDetailTwo,
         meta: {
            title: 'Listing Detail Two'
         }
      }
   ]
}
