export interface Action {
  type: string;
  payload?: any;
}

export interface Reducer<T> {
  (oldState: T, action: Action);
}
