import React from 'react'

const BackgroundImages = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default BackgroundImages
