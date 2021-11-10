import {put, takeLatest, call} from 'redux-saga/effects';
import * as types from '../actionType';

function* newsWatcher() {
  yield takeLatest(types.NEWS_API, fetchNews);
  yield takeLatest(types.NEWS_DETAIL_API, fetchDetailNews);
}

function* fetchNews() {
  try {
    const response = yield call(fetchNewsAPI);

    yield put({
      type: types.NEWS_API_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.NEWS_API_FAILED,
      payload: error,
    });
  }
}

const fetchNewsAPI = async () => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json',
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
};

function* fetchDetailNews(action) {
  try {
    const response = yield call(fetchDetailNewsAPI, action);

    yield put({
      type: types.NEWS_DETAIL_API_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.NEWS_DETAIL_API_FAILED,
      payload: error,
    });
  }
}

const fetchDetailNewsAPI = async action => {
  console.log('action', action);
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${action.payload}.json`,
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
};

export default newsWatcher;
