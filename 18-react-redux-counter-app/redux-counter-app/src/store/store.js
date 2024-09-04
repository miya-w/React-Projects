// store.js
import { createStore } from 'redux';
import counterReducer from '../reducers/reducer';

const store = createStore(counterReducer);

export default store;
