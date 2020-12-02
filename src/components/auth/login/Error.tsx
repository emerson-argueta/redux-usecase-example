import React, { Fragment } from 'react'

const errorStyle: React.CSSProperties = { color: 'red', fontWeight: 'bold' }

interface ErrorProps {
    error: string
}
export const Error = (props: ErrorProps) => {

    return (
        <Fragment>
            <p style={errorStyle}>{props.error}</p>
        </Fragment>
    )
}
