import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getShelf() {
    try{
        const config ={
            withCredentials: true,
        }
        const response = yield axios.get('/api/shelf', config);
        yield put ({ type: 'SET_SHELF', payload: response.data });

    } catch (error){
        console.log('can\'t get shelf', error);
    }
} 

function* getShelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
}

export default getShelfSaga;