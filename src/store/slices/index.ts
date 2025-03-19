import { combineReducers } from 'redux';
import loginReducer from './login';
const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
