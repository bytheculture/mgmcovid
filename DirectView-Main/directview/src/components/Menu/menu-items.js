
export const menus = [
	{
		state: '/home',
		name: 'Home',
		type: 'sub',
		children: [
			{state: '/home/version1', name: 'Home Version 1', type: 'link'},
			{state: '/home/version2', name: 'Home Version 2', type: 'link'}
		]
	},
	{
		state: '/listing',
		name: 'Listing',
		type: 'sub',
		children: [
			{
				state: '/list', 
				name: 'List Layout', 
				type: 'sub',
				children: [
					{state: '/listing/list/with-sidebar', name: 'With Sidebar', type: 'link'},
					{state: '/listing/list/full-width', name: 'Full Width', type: 'link'},
					{state: '/listing/list/full-width-map', name: 'Full Width + Map', type: 'link'}
				]
			},
			{
				state: '/grid', 
				name: 'Grid Layout', 
				type: 'sub',
				children: [
					{state: '/listing/grid/with-sidebar', name: 'With Sidebar', type: 'link'},
					{state: '/listing/grid/full-width', name: 'Full Width', type: 'link'},
					{state: '/listing/grid/full-width-map', name: 'Full Width + Map', type: 'link'}
				]
			},
			{
				state: '/half-map', 
				name: 'Half Screen Map', 
				type: 'sub',
				children: [
					{state: '/listing/half-map/list', name: 'Layout 1', type: 'link'},
					{state: '/listing/half-map/grid', name: 'Layout 2', type: 'link'}
				]
			},
			{
				state: '/detail', 
				name: 'Detail', 
				type: 'sub',
				children: [
					{state: '/listing/detail/version1', name: 'Version1', type: 'link'},
					{state: '/listing/detail/version2', name: 'Version2', type: 'link'}
				]
			}
		]
	},
	{
		state: '/admin',
		name: 'User Panel',
		type: 'sub',
		children: [
			{state: '/admin/dashboard', name: 'Dashboard', type: 'link'},
			{state: '/admin/messages', name: 'Messages', type: 'link'},
			{state: '/admin/bookings', name: 'Bookings', type: 'link'},
			{state: '/admin/reviews', name: 'Reviews', type: 'link'},
			{state: '/admin/bookmarks', name: 'Bookmarks', type: 'link'},
			{state: '/admin/list', name: 'My Listing', type: 'link'},
			{state: '/admin/add-list', name: 'Add List', type: 'link'},
			{state: '/admin/profile', name: 'Profile', type: 'link'}
		]
	},
	{
		state: '/pages',
		name: 'Pages',
		type: 'sub',
		children: [
			{state: '/pages/pricing', name: 'Pricing', type: 'link'},
			{state: '/pages/invoice', name: 'Invoice', type: 'link'},
			{state: '/pages/booking', name: 'Booking', type: 'link'},
			{state: '/pages/add-listing', name: 'Add Listing', type: 'link'},
			{state: '/pages/user-profile', name: 'Profile', type: 'link'},
			{
				state: '/blog', 
				name: 'blog', 
				type: 'sub',
				children: [
					{state: '/pages/blog/list', name: 'List', type: 'link'},
					{state: '/pages/blog/detail', name: 'Detail', type: 'link'}
				]
			},
			{state: '/pages/about-us', name: 'About', type: 'link'},
			{state: '/pages/contact-us', name: 'Contact', type: 'link'}
		]
	},
	{
		state: '/session',
		name: 'Session',
		type: 'sub',
		children: [
			{state: '/session/login', name: 'Login', type: 'link'},
         {state: '/session/sign-up', name: 'Signup', type: 'link'},
			{state: '/session/forgot-password', name: 'Forgot Password', type: 'link'},
			{state: '/session/coming-soon', name: 'Coming Soon', type: 'link'}
		]
	}
]

// export default menus;