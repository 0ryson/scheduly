import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Footer = ({ children }: Iprops): JSX.Element => {
  return <footer className="footer">{children}</footer>
}

export default Footer
