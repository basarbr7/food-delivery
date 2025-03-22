import React from 'react'

const Flex = ({flex, children}) => {
  return (
    <div className={`flex ${flex}`}>{children}</div>
  )
}

export default Flex