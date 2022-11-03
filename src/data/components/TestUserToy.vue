<template>
  <div class="row">
    <div class="col">
      <q-btn @click="addTestUser" label="add test user" />
    </div>
    <div class="col">Number of users: {{ store.users.length }}</div>
  </div>
  <div class="row">
    <div class="col">
      <q-list style="max-height: 10em; overflow-y: auto">
        <q-item v-for="user of store.users" :key="'u-' + user.id">
          {{ user.username }} - {{ user.firstName }} - {{ user.lastName }} -
          {{ user?.guid?.value }}
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/app/stores/appModule';

export default defineComponent({
  name: 'TestUserToy',
  setup() {
    const store = useAppStore();

    store.loadUsers();

    const addTestUser = () => {
      store.addTestUser({
        username: 'test',
        firstName: 'Testy',
        lastName: 'McTesterson',
        email: 'test@test.com',
      });
    };

    return { store, addTestUser };
  },
});
</script>

<style scoped></style>
