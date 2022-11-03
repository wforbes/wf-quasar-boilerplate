import Dexie, { Table } from 'dexie';
import { Guid } from 'guid-typescript';
import { User } from 'src/models/models';

export default class LocalDataAccess extends Dexie {
  users!: Table<User>;

  constructor() {
    super('wf-quasar');
    this.version(1).stores({
      users: '++id, guid, username, firstName, lastName, email',
    });
  }

  addUser(user: User) {
    return this.users.add(user);
  }

  getUsers() {
    return this.users.toArray();
  }
}
