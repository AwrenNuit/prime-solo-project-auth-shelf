import { all } from 'redux-saga/effects';
import { default as loginSaga } from './login/index';
import {default as shelfSaga} from './shelf/index';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    shelfSaga()
  ]);
}