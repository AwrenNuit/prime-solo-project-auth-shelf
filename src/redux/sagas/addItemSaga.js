import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

// POST items to database
function* addItem(action){
  try{
      yield axios.post(`/api/shelf`, action.payload);
      yield put({type: `GET_SHELF`});
  }
  catch(error){
      console.log('error in POST item', error);
  }
}

function* addItemSaga() {
  yield takeLatest('POST_ITEM', addItem);
}

export default addItemSaga;