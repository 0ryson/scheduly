import React from 'react'

type Iprops = {
  children?: React.ReactNode
}

const Content = ({ children }: Iprops): JSX.Element => {
  return <div className="content">{children}</div>
}

export default Content
