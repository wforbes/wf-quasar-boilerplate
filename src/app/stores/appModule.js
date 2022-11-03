import { defineStore } from 'pinia';
import DataAccess from '@/data/DataAccess';
import { AppEnvironment } from '@/models/models.ts';

export const useAppStore = defineStore('app', {
  state: () => ({
    localhostUrl: 'http://localhost:9000', //this dev env client url
    localApiUrl: '', //dev env api url
    prodClientUrl: 'http://prodenvplaceholder.dev', //this prod env url
    prodApiUrl: '', //prod env api url
    clientUrl: '', // current client url
    apiUrl: '', // current api url
    dataAccess: undefined, // from src/data dir
  }),
  getters: {
    currentEnv: (state) =>
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
    setClientUrl() {
      this.clientUrl =
        this.localhostUrl.includes(window.location.host) ||
        this.localhostUrl.includes(window.location.host.href)
          ? this.localhostUrl
          : this.prodClientUrl;
    },
    setDataAccess() {
      this.dataAccess = new DataAccess();
    },
  },
});
