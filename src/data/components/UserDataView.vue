<template>
	<div id="user-data-view">
		<q-tab-panels v-model="activeTab">
			<q-tab-panel :name="tabKeys.userTableKey">
				<div>
					<div class="row">
						<div class="col">
							<q-btn
								@click="showUserForm"
								label="add test user"
							/>
						</div>
						<div class="col">
							Number of users: {{ store.users.length }}
						</div>
					</div>
					<div class="row">
						<div class="col">
							<q-list style="max-height: 30em; overflow-y: auto">
								<q-item
									v-for="user of store.users"
									:key="'u-' + user.id"
								>
									{{ user.login.username }} -
									{{ user.name.first }} -
									{{ user.name.last }} -
									{{ user.login.uuid }}
								</q-item>
							</q-list>
						</div>
					</div>
				</div>
			</q-tab-panel>
			<q-tab-panel :name="tabKeys.userFormKey">
				<div>
					<q-btn @click="showUserTable" label="< Back" />
				</div>
			</q-tab-panel>
		</q-tab-panels>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/app/stores/appModule';

const store = useAppStore();
await store.loadUsers();

const activeTab = ref(0);
const tabKeys = {
	userTableKey: 0,
	userFormKey: 1,
};

const showUserForm = () => {
	activeTab.value = 1;
};
const showUserTable = () => {
	activeTab.value = 0;
};

/*
const addTestUser = () => {
	store.addTestUser({
		username: 'test',
		firstName: 'Testy',
		lastName: 'McTesterson',
		email: 'test@test.com',
	});
};*/
</script>

<style scoped></style>
