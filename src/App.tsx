import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useCountRenders } from './countRenders';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/RootReducer';
import { SetABoolean1ActionCreator } from './redux/app/setABoolean1/actions/SetABoolean1ActionCreator';

export const App = () => {
  const renderCount = useCountRenders()

  const [open, setOpen] = useState<Boolean>()

  const boolean1 = useSelector((state: RootState) => state.app.setABoolean1 || false)
  const dispatch = useDispatch()
  const setBoolean1 = (boolean1: boolean) => { dispatch(SetABoolean1ActionCreator(boolean1)) }

  useEffect(
    () => {

      if (open) {
        setBoolean1(!boolean1)
      }

    }, [open])



  const localStateButton = (
    <Fragment>
      <button
        onClick={() => { setOpen(!open) }}
      >
        {"Local State"}
      </button>
    </Fragment>
  )

  const renderCountDiv = (
    <div>
      {"The render count is: " + renderCount}
    </div>
  )

  const globalStateDiv = (
    <div>
      {"The global state for setBoolean1 is : " + boolean1}
    </div>
  )

  return (
    <Fragment >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {localStateButton}
        {open ? (<div>{"I am open"}</div>) : <div>{"I am closed"}</div>}
        {renderCountDiv}
        {globalStateDiv}

      </header>
    </Fragment>

  );
}
