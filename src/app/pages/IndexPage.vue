<template>
	<q-page class="row justify-center">
		<div class="col-sm-9">
			<app-banner />
		</div>
	</q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/app/stores/appModule';
import AppBanner from '@/app/components/AppBanner.vue';

export default defineComponent({
	name: 'IndexPage',
	components: { AppBanner },
	setup() {
		const appStore = useAppStore();
		appStore.setupStore();

		/* quasar scaffold cruff
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
    */
	},
});
</script>
