<template>
	<q-toolbar class="row bg-primary q-pt-sm q-pb-sm">
		<q-btn
			flat
			dense
			round
			icon="menu"
			aria-label="Menu"
			@click="toggleNavMenu"
		></q-btn>
		<router-link to="/">
			<q-img
				:src="appLogo"
				ratio="1"
				width="3.5em"
				height="3.5em"
				class="q-ml-md"
				style="border-radius: 0.3em"
				alt="Viper icon"
			/>
		</router-link>
		<!--
			<q-space />
			<div>Mid section placeholder</div>
			<q-space />
			<div>Right section placeholder</div>
		-->
	</q-toolbar>
</template>
<script>
import appLogo from '@/assets/favicon/android-chrome-192x192.png';
//import UserIconMenu from '@/app/components/UserIconMenu.vue';
export default {
	name: 'AppBar',
	components: {
		//		UserIconMenu,
	},
	data() {
		return {
			selectedProgram: null,
			appLogo: appLogo,
		};
	},
	methods: {
		toggleNavMenu() {
			this.$emit('toggleNavMenu');
		},
	},
};
</script>
