import React from 'react'

const CustomDiv = ({ children, ...props }) => {
  return (
    <div {...props}>
        {children}
    </div>
  )
}

export default CustomDiv
