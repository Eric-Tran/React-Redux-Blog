import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//redux form import.
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
