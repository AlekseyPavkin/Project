import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas';

import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMiddleWare } from './redux/middleware';









const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleWare,
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
