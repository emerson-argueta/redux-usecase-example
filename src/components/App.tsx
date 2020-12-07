import React, { Fragment } from 'react';
import logo from './app/styles/logo.svg';
import './app/styles/App.css';
import { BooleanTest } from './app/BooleanTest';
import { Store } from '../redux/Store';
import { Provider } from 'react-redux';
import { Auth } from './Auth';
import { AuthProvider } from './auth/state/AuthContext';

export const App = () => {

  return (
    <Fragment >
      <header className="App-header">
        <Auth />
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </Fragment>
  );
}
