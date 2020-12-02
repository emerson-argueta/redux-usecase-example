import React, { Fragment, useReducer } from 'react'

import * as GLOBAL_ACITON_CREATORS from './state/actions/AuthActionCreators'
import { AuthReducer } from './state/AuthReducer';
import { initAuthState } from './state/AuthState';
import { loginAPICall } from './state/actions/AuthAPICalls';

import * as LOCAL_ACTION_CREATORS from './login/state/LoginActionCreators';
import { LoginReducer } from './login/state/LoginReducer';
import { initLoginState } from './login/state/LoginState';

import { LoginForm } from './login/LoginForm'
import { Error } from './login/Error';
import { Loading } from './login/Loading';
import { Logout } from './login/Logout';

export const Login = () => {
    const [globalState, globalDispatch] = useReducer(AuthReducer, initAuthState)
    const [localState, localDispatch] = useReducer(LoginReducer, initLoginState)
    const { isLoggedIn, error } = globalState;
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
        globalDispatch(GLOBAL_ACITON_CREATORS.logout())
        const isLoading = false
        handleLoginLoading(isLoading)
    }
    const handleLogin = async () => {
        const isLoading = true
        handleLoginLoading(isLoading)

        try {
            await loginAPICall(email, password);
            const isSuccesful = true
            globalDispatch(GLOBAL_ACITON_CREATORS.login(isSuccesful))
        } catch (error) {
            const isSuccesful = false
            globalDispatch(GLOBAL_ACITON_CREATORS.login(isSuccesful))
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

        <Fragment>
            {error && !isLoading && <Error {...errorProps} />}
            {isLoggedIn && <Logout {...logoutProps} />}
            {!isLoggedIn && !isLoading && <LoginForm {...loginFormProps} />}
            {isLoading && <Loading />}

        </Fragment>

    )
}
