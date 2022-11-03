<template>
  <q-card class="q-px-lg">
    <h5 class="q-mb-none">Data Access Playground</h5>
    <q-list>
      <q-item> App Environment: {{ store.currentEnv }} </q-item>
    </q-list>
  </q-card>
</template>

<script>
import { useAppStore } from '@/app/stores/appModule';
export default {
  setup() {
    const store = useAppStore();

    return { store };
  },
};
</script>

<style lang="scss" scoped></style>
