import {createStore,applyMiddleware,Store} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './allReducers';




const store:Store = createStore(allReducers, applyMiddleware(thunk))

export default store;
