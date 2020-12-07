import { Button } from '@material-ui/core'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCountRenders } from '../../customHooks/countRenders'
import { SetABoolean1ActionCreator } from '../../redux/app/setABoolean1/actions/SetABoolean1ActionCreator'
import { RootState } from '../../redux/RootReducer'
import { AuthStateContext } from '../auth/state/AuthContext'

export const BooleanTest = () => {
    const renderCount = useCountRenders()

    const [open, setOpen] = useState<Boolean>()

    const boolean1 = useSelector((state: RootState) => state.app.setABoolean1 || false)
    const dispatch = useDispatch()
    const setBoolean1 = (boolean1: boolean) => { dispatch(SetABoolean1ActionCreator(boolean1)) }

    const authState = useContext(AuthStateContext)
    const { isLoggedIn } = authState

    useEffect(
        () => {

            if (open) {
                setBoolean1(!boolean1)
            }
        }, [open]
    )


    const localStateButton = (
        <Fragment>
            <Button variant='contained'
                onClick={() => { setOpen(!open) }}
            >
                {"Local State"}
            </Button>
        </Fragment>
    )
    const authStateDiv = (
        <div>
            {'From the boleanTest component the logged in --->' + isLoggedIn}
        </div>
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
            {localStateButton}
            {open ? (<div>{"I am open"}</div>) : <div>{"I am closed"}</div>}
            {authStateDiv}
            {renderCountDiv}
            {globalStateDiv}
        </Fragment>

    );
}
