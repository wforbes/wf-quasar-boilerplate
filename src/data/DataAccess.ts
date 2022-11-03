import { useAppStore } from 'src/app/stores/appModule';
import { AppEnvironment, User } from 'src/models/models';
import ApiDataAccess from './ApiDataAccess';
import LocalDataAccess from './LocalDataAccess';

export default class DataAccess {
  dataContext;
  constructor() {
    const store = useAppStore();
    if (store.currentEnv === AppEnvironment.LOCAL) {
      this.dataContext = new LocalDataAccess();
      return;
    }
    this.dataContext = new ApiDataAccess();
  }

  addUser(user: User) {
    return this.dataContext.addUser(user);
  }

  getUsers() {
    return this.dataContext.getUsers();
  }
}
