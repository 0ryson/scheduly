import React, { useState } from 'react'
import MainContext from './MainContext'

type IProps = {
  children: React.ReactNode
}

const MainProvider = ({ children }: IProps): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false)

  const mainContext = {
    openMenu,
    setOpenMenu: (value: any) => setOpenMenu(value),
  }
  return (
    <MainContext.Provider value={mainContext}>{children}</MainContext.Provider>
  )
}

export default MainProvider
