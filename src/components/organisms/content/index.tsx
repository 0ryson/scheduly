import React from 'react'

type Iprops = {
  children: React.ReactNode
}

const Content: React.FC<Iprops> = ({ children }: Iprops) => {
  return (
    <div className="content bg-gray-200 xl:col-span-4 sm:col-span-3">
      {children}
    </div>
  )
}

export default Content
