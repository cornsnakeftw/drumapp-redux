import { action, observable } from "mobx";

export default class MainStore {
  constructor(root_store) {
    this.root_store = root_store;
  }

  @observable active_key;
  @observable current_index = 0;
  @observable recordArray = [];
  @observable score = 0;
  @observable startTime = 0;

  @action.bound
  setActiveKey(active_key) {
    this.active_key = active_key;
  }

  @action.bound
  setCurrentIndex(current_index) {
    this.current_index = current_index;
  }

  @action.bound
  setRecordArray(recordArray) {
    this.recordArray = recordArray;
  }

  @action.bound
  setScore(score) {
    this.score = score;
  }

  @action.bound
  setStartTime(startTime) {
    this.startTime = startTime;
  }
}
