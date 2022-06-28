import React from 'react'

interface IMainContext {
  value: any
  setValue: (value: any) => void
}

const MainContext = React.createContext({} as IMainContext)

export default MainContext
