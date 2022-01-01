import counterReducer from './counter/counterReducer';
import todoReducer from './todo/todoReducer';
import postsReducer from './posts_api/postsReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({counter : counterReducer,todo:todoReducer,post:postsReducer});

export default allReducers;