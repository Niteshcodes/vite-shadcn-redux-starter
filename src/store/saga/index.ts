import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './login';


export default function* rootSaga() {
  yield all(
    [
      watchLoginSaga(),
    ]
  );
}



