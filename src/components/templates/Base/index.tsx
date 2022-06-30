import React from 'react'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import Menu from '../../molecules/Menu'
import CalendarViews from '../../molecules/CalendarViews'
import ToggleMenu from '../../molecules/ToggleMenu'
import Brand from '../../molecules/Brand'
import Notifications from '../../molecules/Notifications'
import Copyrigth from '../../molecules/Copyright'

interface IProps {
  children?: React.ReactNode
}

const Base = ({ children }: IProps): JSX.Element => {
  return (
    <div className="w-full h-screen flex bg-white">
      <div className="static px-8 py-6 max-w-sm border-r border-slate-200 break-words">
        <Brand />
        <Menu pages={['private', 'team', 'public']} />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="px-8 py-6 bg-white">
          <Header className="flex justify-between">
            <ToggleMenu />
            <CalendarViews />
            <Notifications />
          </Header>
        </div>
        <div className="flex flex-col justify-between overflow-y-auto w-full h-full mx-auto px-8 py-6 max-w-screen-xl">
          {children}
          <div className="mt-10 px-8 py-6">
            <Footer>
              <Copyrigth />
            </Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Base
