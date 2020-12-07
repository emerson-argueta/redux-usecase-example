import React, { Fragment, useContext, useReducer } from 'react'

import * as AUTH_ACITON_CREATORS from './state/actions/AuthActionCreators'
import { loginAPICall } from './state/actions/AuthAPICalls';

import * as LOCAL_ACTION_CREATORS from './login/state/LoginActionCreators';
import { LoginReducer } from './login/state/LoginReducer';
import { initLoginState } from './login/state/LoginState';

import { LoginForm } from './login/LoginForm'
import { Error } from './login/Error';
import { Loading } from './login/Loading';
import { Logout } from './login/Logout';
import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/Store';
import { AuthDispatchContext, AuthStateContext, useAuthContext } from './state/AuthContext';

export const Login = () => {
    const [authState, authDispatch] = useAuthContext()

    const [localState, localDispatch] = useReducer(LoginReducer, initLoginState)
    const { isLoggedIn, error } = authState;
    const { email, password, isLoading } = localState

    const handleEmailTextChange = (email: string) => {
        localDispatch(LOCAL_ACTION_CREATORS.loginFieldChange({ email }))
    }
    const handlePasswordTextChange = (password: string) => {
        localDispatch(LOCAL_ACTION_CREATORS.loginFieldChange({ password }))
    }
    const handleLoginLoading = (isLoading: boolean) => {
        localDispatch(LOCAL_ACTION_CREATORS.loginLoading(isLoading))
    }

    const handleLogout = () => {
        authDispatch(AUTH_ACITON_CREATORS.logout())
        const isLoading = false
        handleLoginLoading(isLoading)
    }
    const handleLogin = async () => {
        const isLoading = true
        handleLoginLoading(isLoading)

        try {
            await loginAPICall(email, password);
            const isSuccesful = true
            authDispatch(AUTH_ACITON_CREATORS.login(isSuccesful))
        } catch (error) {
            const isSuccesful = false
            authDispatch(AUTH_ACITON_CREATORS.login(isSuccesful))
        } finally {
            const isLoading = false
            handleLoginLoading(isLoading)
        }

    }

    const logoutProps = { handleLogout: handleLogout }
    const loginFormProps = {
        email: email,
        password: password,
        handleEmailTextChange: handleEmailTextChange,
        handlePasswordTextChange: handlePasswordTextChange,
        handleLogin: handleLogin
    }
    const errorProps = { error: error }

    return (
        <Provider store={Store}>
            <Fragment>
                <div>{'From Login component auth state --->' + isLoggedIn + ' loading state --->' + isLoading}</div>
                {error && !isLoading && <Error {...errorProps} />}
                {isLoggedIn && <Logout {...logoutProps} />}
                {!isLoggedIn && !isLoading && <LoginForm {...loginFormProps} />}
                {isLoading && <Loading />}

            </Fragment>
        </Provider>
    )
}
