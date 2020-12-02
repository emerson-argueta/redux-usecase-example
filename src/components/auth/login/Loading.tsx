import React, { Fragment } from 'react'
import { CircularProgress } from '@material-ui/core'


export const Loading = () => {
    return (
        <Fragment>
            <CircularProgress
                size='10%'
                color='secondary'
            />
        </Fragment>
    )
}
