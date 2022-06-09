import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import { HashRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalSyles';

const sagaMiddleware = createSagaMiddleware();
const container = document.getElementById('root')!;
const root = createRoot(container);
const store = setupStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyles />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
