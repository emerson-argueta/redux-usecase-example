import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Store } from '../redux/Store'
import { BooleanTest } from './app/BooleanTest'
import { Login } from './auth/Login'
import { AuthProvider } from './auth/state/AuthContext'

export const Auth = () => {
    return (

        <Fragment>
            <Provider store={Store}>
                <AuthProvider>
                    <BooleanTest />
                    <Login />
                </AuthProvider>

            </Provider>
        </Fragment>
    )
}
