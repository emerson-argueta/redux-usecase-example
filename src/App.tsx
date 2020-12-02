import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/auth/Login';
import { BooleanTest } from './components/app/BooleanTest';

export const App = () => {


  return (
    <Fragment >
      <header className="App-header">
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        <BooleanTest />
      </header>
    </Fragment>

  );
}
