import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Menu: React.FC<Iprops> = ({ children }: Iprops) => {
  return (
    <div className="menu bg-gray-400 xl:col-span-1 sm:col-span-1 xs:col-span-1">
      {children}
    </div>
  )
}

export default Menu