<!-- Header Structure -->
<template>
	<nav id="navigation" class="style-1">
		<ul id="responsive">
			<li v-for="menuitem in menuItems" v-bind:key="menuitem.name" :class="{'open-menu': selectedMenu == menuitem.name}">
				<router-link class="current" :to="menuitem.state" v-if="menuitem.type === 'link'">{{ menuitem.name }}</router-link>
				<a class="current" v-if="menuitem.type === 'sub'" @click="menuClick(menuitem.name)">{{ menuitem.name }}</a>
				<ul v-if="menuitem.type === 'sub'">
					<li v-for="childitem in menuitem.children" v-bind:key="childitem.name" :class="{'open-menu': selectedSubMenu == childitem.name}">
						<router-link :to="childitem.state" v-if="childitem.type === 'link'">{{ childitem.name }}</router-link>
						<a v-if="childitem.type === 'sub'" @click="subMenuClick(childitem.name)">{{ childitem.name }}</a>
						<ul v-if="childitem.type === 'sub'">
							<li v-for="subchilditem in childitem.children" v-bind:key="subchilditem.name">
								<router-link :to="subchilditem.state">{{ subchilditem.name }}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
import { menus } from './menu-items.js';
export default {
	data(){
		return{
			menuItems : menus,
			selectedMenu : null,
			selectedSubMenu : null
		}
	},
	methods: {
		menuClick(value)
		{
			if(this.selectedMenu == value)
			{
				this.selectedMenu = null;
			}
			else
			{
				this.selectedMenu = value;
			} 
		},

		subMenuClick(value)
		{
			if(this.selectedSubMenu == value)
			{
				this.selectedSubMenu = null;
			}
			else
			{
				this.selectedSubMenu = value;
			}
		}
	}
};
</script>
