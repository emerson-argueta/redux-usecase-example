import { Button } from '@material-ui/core'
import React, { Fragment } from 'react'

interface LogoutProps {
    handleLogout: () => void
}
export const Logout = (props: LogoutProps) => {

    return (
        <Fragment>
            <Button variant='contained' onClick={() => props.handleLogout()}>
                {'Logout'}
            </Button>
        </Fragment >
    )
}
