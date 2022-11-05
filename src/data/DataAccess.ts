import axios from 'axios';
import { useAppStore, AppState } from '@/app/stores/appModule';
import { isEmpty, has } from 'lodash';
import { Store } from 'pinia';
import MockData from './MockData';

export default class DataAccess {
	store: Store<string, AppState>;
	headers: any;
	mockData: MockData;
	useMockData = true;

	constructor() {
		this.store = useAppStore();
		this.mockData = new MockData();
		this.headers = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		};
	}

	requestUrl(endpoint, options: any = {}) {
		return `${this.store.$state.apiUrl}/${endpoint}/${
			!isEmpty(options) ? `${options.id}` : ''
		}`;
	}

	getErrorMsg(error) {
		if (axios.isAxiosError(error)) {
			console.error(error);
		}
		//TODO: handle by error code...
		return error;
	}

	get(endpoint, options = {}, queryString = {}) {
		// use mock data until an api is set up for this app
		if (this.useMockData) return this.mockData.getMock(endpoint);

		return new Promise((resolve) => {
			axios
				.get(
					this.requestUrl(endpoint, options) +
						(!isEmpty(queryString) ? '?' + queryString : ''),
					!isEmpty(this.headers) ? { headers: this.headers } : {}
				)
				.catch((error) => {
					return this.getErrorMsg(error);
				})
				.then((response) => {
					if (has(response, '_valid')) return resolve(response);
					if (has(response.data, 'results')) {
						return resolve(response.data.results);
					}
					return resolve(response.data);
				});
		});
	}

	getUsers() {
		return this.get('users');
	}
}
