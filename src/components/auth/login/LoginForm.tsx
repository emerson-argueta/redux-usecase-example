import { Button, TextField, withStyles } from '@material-ui/core';
import React from 'react'

const loginFormStyles: React.CSSProperties = {
    textAlign: 'center',
    verticalAlign: 'middle'
}

const inputStyles: React.CSSProperties = {
    background: "#bdc4c1"
}

interface LoginFormProps {
    email: string,
    password: string,
    handleEmailTextChange: (email: string) => void,
    handlePasswordTextChange: (password: string) => void,
    handleLogin: () => void
}
export const LoginForm = (props: LoginFormProps) => {
    return (
        <div style={loginFormStyles}>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    props.handleLogin()
                }}
            >
                <TextField
                    style={inputStyles}
                    color='primary'
                    variant='filled'
                    type="text"
                    placeholder={'Email'}
                    value={props.email}
                    onChange={e => props.handleEmailTextChange(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    style={inputStyles}
                    variant='filled'
                    type="text"
                    placeholder={'Password'}
                    value={props.password}
                    onChange={e => props.handlePasswordTextChange(e.target.value)}
                />
                <br />
                <br />

                <Button variant='contained' type='submit' >
                    {'Log In'}
                </Button>


            </form>
        </div>
    )
}