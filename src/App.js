import React from 'react';
import Routes from './routes'
import { Router } from 'react-router-dom'
import history from './services/history'
// import { Container } from './styles';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
