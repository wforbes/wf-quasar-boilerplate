<template>
	<q-page>
		<h5 class="q-mb-none">Data Management</h5>
		<div class="row">
			<div class="col">
				<q-list>
					<q-item> App Environment: {{ currentEnv }} </q-item>
				</q-list>
			</div>
		</div>
		<Suspense>
			<user-data-view />
		</Suspense>
	</q-page>
</template>

<script setup lang="ts">
import { useAppStore } from '@/app/stores/appModule';
import UserDataView from '@/data/components/UserDataView.vue';

const currentEnv = useAppStore().currentEnv;
</script>

<style lang="scss" scoped></style>
