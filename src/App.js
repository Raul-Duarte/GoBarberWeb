import React from 'react';
import { Provider } from 'react-redux'
import Routes from './routes'

import './config/ReactotronConfig'

import { Router } from 'react-router-dom'
import history from './services/history'

import store from './store'

import GlobalStyle from './styles/global'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
