import React, { useContext, useEffect } from 'react'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import Menu from '../../molecules/Menu'
import CalendarViews from '../../molecules/CalendarViews'
import ToggleMenu from '../../molecules/ToggleMenu'
import Brand from '../../molecules/Brand'
import Notifications from '../../molecules/Notifications'
import Copyrigth from '../../molecules/Copyright'
import MainContext from '../../../contexts/MainContext'

interface IProps {
  children?: React.ReactNode
}

const Base = ({ children }: IProps): JSX.Element => {
  const { openMenu, setOpenMenu } = useContext(MainContext)

  const toggleMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  return (
    <div className="w-full h-screen flex bg-white">
      <div
        className={`${
          !openMenu && 'hidden'
        } absolute z-10 lg:static lg:block h-full w-full lg:max-w-min  border-r border-slate-200`}
      >
        <div
          onClick={toggleMenu}
          className={`${
            !openMenu && 'hidden'
          } lg:hidden z-10 absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-slate-900 opacity-50`}
        ></div>
        <div className="z-20 px-8 py-6 relative w-min h-full break-words bg-white">
          <Brand />
          <Menu pages={['my-calendar', 'for-teams', 'public']} />
        </div>
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
