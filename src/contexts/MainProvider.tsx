import React, { useState } from 'react'
import MainContext from './MainContext'

type IProps = {
  children: React.ReactNode
}

const MainProvider = ({ children }: IProps): JSX.Element => {
  const [value, setValue] = useState(null)

  const mainContext = {
    value,
    setValue: (value: any) => setValue(value),
  }
  return (
    <MainContext.Provider value={mainContext}>{children}</MainContext.Provider>
  )
}

export default MainProvider
