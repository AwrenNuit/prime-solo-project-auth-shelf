import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editItem(action) {
    try{
        const config ={
            withCredentials: true,
            ...action.payload
        }
        yield axios.put(`/api/shelf/${action.payload.id}`, config);
        yield put ({ type: 'GET_SHELF' });

    } catch (error){
        console.log('can\'t get shelf', error);
    }
} 

function* editItemSaga() {
    yield takeLatest('EDIT_ITEM', editItem);
}

export default editItemSaga;