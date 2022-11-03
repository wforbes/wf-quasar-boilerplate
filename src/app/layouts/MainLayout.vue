<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<AppBar @toggleNavMenu="toggleNavMenuOpen" />
		</q-header>
		<NavMenu :navMenuOpen="navMenuOpen" @closeNavMenu="toggleNavMenuOpen" />
		<q-page-container class="page-gutter">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppBar from '@/app/components/AppBar.vue';
import NavMenu from '@/app/components/NavMenu.vue';

export default defineComponent({
	name: 'MainLayout',
	components: {
		AppBar,
		NavMenu,
	},

	setup() {
		const navMenuOpen = ref(false);
		const toggleNavMenuOpen = () => {
			navMenuOpen.value = !navMenuOpen.value;
		};
		return {
			navMenuOpen,
			toggleNavMenuOpen,
		};
	},
});
</script>
