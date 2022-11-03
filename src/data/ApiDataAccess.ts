import { User } from 'src/models/models';

export default class ApiDataAccess {
  constructor() {
    console.log('api da constructor');
  }

  init() {
    console.log('api data access init');
  }

  addUser(user: User) {
    console.log('post' + user);
  }

  getUsers() {
    console.log('get users');
  }
}
