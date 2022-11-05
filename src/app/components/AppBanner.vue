<template>
	<div id="app-banner">
		<h1 class="text-h3 text-center q-mb-none">{{ appTitle }}</h1>
		<h2 class="text-h5 text-center q-mt-none">project starter template</h2>
	</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppBanner',
	setup() {
		const appTitle = 'WF Boilerplate - Quasar';

		return { appTitle };
	},
});
</script>
