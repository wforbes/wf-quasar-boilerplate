import { isEmpty } from 'lodash';
//import { Guid } from 'guid-typescript';

export default class MockData {
	users: any[];
	fakeUserUrl = 'https://randomuser.me/api?nat=us,ca,gb,au,fr,gb&results=40';

	getMock(endpoint: string) {
		if (endpoint === 'users') {
			return this.getFakeUsers();
		}
		return Promise.resolve([]);
	}

	getMockUrl(endpoint) {
		if (endpoint === 'users') {
			return this.fakeUserUrl;
		}
		return '';
	}

	getFakeUsers() {
		return new Promise(async (resolve) => {
			const response = await axios.get(this.fakeUserUrl);
			const users: any = [];
			if (response.status !== 200 || isEmpty(response?.data)) return [];
			for (const result of response.data.results) {
				users[users.length] = result;
			}
			resolve(users);
		});
	}
}
