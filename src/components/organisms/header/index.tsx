import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Header = ({ children }: Iprops): JSX.Element => {
  return <header className="header">{children}</header>
}

export default Header
