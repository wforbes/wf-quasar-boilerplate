<template>
	<q-drawer v-model="isOpen" bordered dark>
		<q-list>
			<q-item header tag="a" :to="'/'">
				<q-item-section avatar>
					<q-img
						:src="logoIcon"
						height="25px"
						width="25px"
						alt="App icon"
					/>
				</q-item-section>
				<q-item-section class="text-weight-bold text-white">{{
					appNameAbbr
				}}</q-item-section>
			</q-item>

			<NavMenuLink
				v-for="link in navLinks"
				:key="link.title"
				v-bind="link"
			/>
		</q-list>
	</q-drawer>
</template>
<script setup lang="ts">
import logoIconSmall from '@/assets/favicon/favicon-32x32.png';
import NavMenuLink from '@/app/components/NavMenuLink.vue';
import { computed } from 'vue';
import { useAppStore } from '@/app/stores/appModule';

const props = defineProps({
	navMenuOpen: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['closeNavMenu']);
const isOpen = computed({
	get() {
		return props.navMenuOpen;
	},
	set(val) {
		if (!val) {
			emit('closeNavMenu', val);
		}
	},
});

const appNameAbbr = useAppStore().appNameAbbr;
const logoIcon = logoIconSmall;
const navLinks = [
	{
		title: 'Data Management',
		caption: 'View and Manage Data and Settings',
		icon: 'folder_copy',
		link: 'data-management',
	},
	{
		title: 'Placeholder Nav Item',
		caption: 'This is a demonstration nav item',
		icon: 'library_books',
		menuItems: [
			{
				title: 'Menu Item 1',
				link: '',
			},
			{
				title: 'Menu Item 2',
				link: '',
			},
			{
				title: 'Menu Item 3',
				link: '',
			},
		],
	},
];
</script>
