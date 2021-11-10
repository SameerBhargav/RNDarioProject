import * as types from '../actionType';

const initialState = {
  newsLoader: false,
  newsData: [],
  newsDetailLoader: false,
  newsDetails: {},
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEWS_API:
      return {
        ...state,
        newsLoader: true,
      };
    case types.NEWS_API_SUCCESS:
      return {
        ...state,
        newsLoader: false,
        newsData: action.payload,
      };
    case types.NEWS_API_FAILED:
      return {
        ...state,
        newsLoader: false,
        newsData: [],
      };
    case types.NEWS_DETAIL_API:
      return {
        ...state,
        newsDetailLoader: true,
      };
    case types.NEWS_DETAIL_API_SUCCESS:
      return {
        ...state,
        newsDetailLoader: false,
        newsDetails: action.payload,
      };
    case types.NEWS_DETAIL_API_FAILED:
      return {
        ...state,
        newsDetailLoader: false,
        newsDetails: {},
      };
    case types.RESET_NEWS_DETAIL:
      return {
        ...state,
        newsDetails: {},
      };

    default:
      return {...state};
  }
};

export default newsReducer;
