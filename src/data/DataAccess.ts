import { useAppStore } from 'src/app/stores/appModule';
import { AppEnvironment } from 'src/models/models';
import ApiDataAccess from './ApiDataAccess';
import LocalDataAccess from './LocalDataAccess';

export default class DataAccess {
  private dataContext;
  constructor() {
    const store = useAppStore();
    if (store.currentEnv === AppEnvironment.LOCAL) {
      this.dataContext = new LocalDataAccess();
      return;
    }
    this.dataContext = new ApiDataAccess();
  }
}
