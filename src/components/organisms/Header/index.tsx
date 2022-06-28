import React from 'react'

type Iprops = {
  className?: string
  children?: React.ReactNode
}

const Header = ({ className, children }: Iprops): JSX.Element => {
  return <header className={className}>{children}</header>
}

export default Header
