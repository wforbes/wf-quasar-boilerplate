<template>
  <q-card class="q-px-lg">
    <h5 class="q-mb-none">Data Access Playground</h5>
    <div class="row">
      <div class="col">
        <q-list>
          <q-item> App Environment: {{ store.currentEnv }} </q-item>
        </q-list>
      </div>
    </div>
    <test-user-toy />
  </q-card>
</template>

<script>
import { useAppStore } from '@/app/stores/appModule';
import TestUserToy from './TestUserToy.vue';
export default {
  name: 'DataAccessPlayground',
  components: { TestUserToy },
  setup() {
    const store = useAppStore();
    return { store };
  },
};
</script>

<style lang="scss" scoped></style>
