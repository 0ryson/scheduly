import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Footer: React.FC<Iprops> = ({ children }: Iprops) => {
  return <footer className="footer">{children}</footer>
}

export default Footer
