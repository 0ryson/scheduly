import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Menu = ({ children }: Iprops): JSX.Element => {
  return <div className="menu">{children}</div>
}

export default Menu
