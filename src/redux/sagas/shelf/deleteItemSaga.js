import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

// DELETE items to database
function* deleteItem(action){
  try{
      yield axios.delete(`/api/shelf/${action.payload}`);
      yield put({type: `GET_SHELF`});
  }
  catch(error){
      console.log('error in DELETE item', error);
  }
}

function* deleteItemSaga() {
  yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;