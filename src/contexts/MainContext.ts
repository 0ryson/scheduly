import React from 'react'

interface IMainContext {
  openMenu: any
  setOpenMenu: (value: any) => void
}

const MainContext = React.createContext({} as IMainContext)

export default MainContext
