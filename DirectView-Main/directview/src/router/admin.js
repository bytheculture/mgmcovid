import AdminendPanel from 'Layout/adminPanel/AdminPanel'

// dashboard components
const Dashboard = () => import('Views/adminPages/Dashboard');
const Messages = () => import('Views/adminPages/Messages');
const Bookings = () => import('Views/adminPages/Bookings');
const Reviews = () => import('Views/adminPages/Reviews');
const Bookmarks = () => import('Views/adminPages/Bookmarks');
const List = () => import('Views/adminPages/List');
const AddList = () => import('Views/adminPages/AddList');
const Profile = () => import('Views/adminPages/Profile');

export default {
   path: '/admin',
   component: AdminendPanel,
   redirect: '/admin/dashboard',
   children: [
      {
         path: '/admin/dashboard',
         component: Dashboard,
         meta: {
            title: 'Dashboard'
         }
      },
      {
         path: '/admin/messages',
         component: Messages,
         meta: {
            title: 'Messages'
         }
      },
      {
         path: '/admin/bookings',
         component: Bookings,
         meta: {
            title: 'Bookings'
         }
      },
      {
         path: '/admin/reviews',
         component: Reviews,
         meta: {
            title: 'Reviews'
         }
      },
      {
         path: '/admin/bookmarks',
         component: Bookmarks,
         meta: {
            title: 'Bookmarks'
         }
      },
      {
         path: '/admin/list',
         component: List,
         meta: {
            title: 'List'
         }
      },
      {
         path: '/admin/add-list',
         component: AddList,
         meta: {
            title: 'Add List'
         }
      },
      {
         path: '/admin/profile',
         component: Profile,
         meta: {
            title: 'Profile'
         }
      }
   ]
}
