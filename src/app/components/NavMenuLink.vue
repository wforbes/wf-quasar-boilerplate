<template>
	<q-item v-if="!menuItems" clickable tag="a" :to="link" dark>
		<q-item-section v-if="icon" avatar>
			<q-icon :name="icon" />
		</q-item-section>

		<q-item-section>
			<q-item-label class="text-weight-bold">{{ title }}</q-item-label>
			<q-item-label caption>{{ caption }}</q-item-label>
		</q-item-section>
	</q-item>
	<q-expansion-item
		v-else-if="menuItems.length > 0"
		:label="title"
		:icon="icon"
		class="text-weight-bold"
		dark
	>
		<div style="margin-left: 4em">
			<NavMenuLink
				v-for="item in menuItems"
				:key="item.title"
				v-bind="item"
			/>
		</div>
	</q-expansion-item>
</template>

<script>
export default {
	name: 'NavMenuLink',
	props: {
		title: {
			type: String,
			required: true,
		},

		caption: {
			type: String,
			default: '',
		},

		link: {
			type: String,
			default: '#',
		},

		icon: {
			type: String,
			default: '',
		},

		menuItems: {
			type: Array,
		},
	},
};
</script>
