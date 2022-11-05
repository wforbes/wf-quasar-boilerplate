import { defineStore } from 'pinia';
import { Guid } from 'guid-typescript';
import { AppEnvironment, User } from 'src/models/models';
import DataAccess from '@/data/DataAccess';

export interface AppState {
	appNameAbbr: string;
	localhostUrl: string; //this dev env client url
	localApiUrl: string; //dev env api url
	prodClientUrl: string; //this prod env url
	prodApiUrl: string; //prod env api url
	clientUrl: string; // current client url
	apiUrl: string; // current api url
	dataAccess: any;
	users: any[]; //TODO: figure out why I can't define as User[]
}

export const useAppStore = defineStore('app', {
	state: (): AppState => ({
		appNameAbbr: 'Wf-Quasar',
		localhostUrl: 'http://localhost:9000', //this dev env client url
		localApiUrl: '', //dev env api url
		prodClientUrl: 'http://prodenvplaceholder.dev', //this prod env url
		prodApiUrl: '', //prod env api url
		clientUrl: '', // current client url
		apiUrl: '', // current api url
		dataAccess: null,
		users: [] as User[],
	}),
	getters: {
		currentEnv: (state: AppState) =>
			state.clientUrl === state.localhostUrl
				? AppEnvironment.LOCAL
				: AppEnvironment.PROD,
	},
	actions: {
		async setupStore() {
			this.setClientUrl();
			//dispatch('setApiUrl');
			//dispatch('setApiDocsUrl');
			this.setDataAccess();
			//dispatch('initSecurity');
			/*
			if (getters.clientUrl === getters.localhostAddr)
				dispatch('initDemo');
      */
		},
		setDataAccess() {
			this.dataAccess = new DataAccess();
		},
		setClientUrl() {
			this.clientUrl = this.localhostUrl.includes(window.location.host)
				? this.localhostUrl
				: this.prodClientUrl;
		},
		addTestUser(user: User) {
			user.guid = Guid.create();
			return this.dataAccess?.addUser(user).then((response: any) => {
				console.log(response);
				if (typeof response == 'number') {
					this.users.push(user);
				}
				return Promise.resolve();
			});
		},
		loadUsers() {
			console.log('loadUsers');
			return this.dataAccess?.getUsers().then((users: User[]) => {
				if (typeof users !== 'undefined') {
					this.users = users;
				}
			});
		},
	},
});
