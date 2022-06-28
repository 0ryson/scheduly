import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Footer = ({ children }: Iprops): JSX.Element => {
  return <footer className="footer opacity-50">{children}</footer>
}

export default Footer
