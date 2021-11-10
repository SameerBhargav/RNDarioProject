import React from 'react';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import NavigationRouter from './src/service/navigation/navigatorRouter';
import NavigatorService from './src/service/navigation/NavigationService';

import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import reducer from './src/redux/reducers/index';
import rootSaga from './src/redux/saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <NavigationRouter />
  </Provider>
);
export default App;
