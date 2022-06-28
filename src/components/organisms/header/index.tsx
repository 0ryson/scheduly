import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Header: React.FC<Iprops> = ({ children }: Iprops) => {
  return <header className="header">{children}</header>
}

export default Header
