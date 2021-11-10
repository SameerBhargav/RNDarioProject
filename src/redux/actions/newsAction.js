import * as types from '../actionType';

export const newsAPI = () => {
  return {type: types.NEWS_API};
};

export const newsDetailAPI = id => {
  return {type: types.NEWS_DETAIL_API, payload: id};
};

export const resetNewsDetailAPI = () => {
  return {type: types.RESET_NEWS_DETAIL};
};
