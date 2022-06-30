import React from 'react'
import Brand from '../../molecules/Brand'
import CalendarViews from '../../molecules/CalendarViews'
import Copyrigth from '../../molecules/Copyright'
import Notifications from '../../molecules/Notifications'
import Menu from '../../molecules/Menu'
import ToggleMenu from '../../molecules/ToggleMenu'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'

const ComingSoon = () => {
  return (
    <div className="w-full h-screen flex bg-white">
      <div className="static px-8 py-6 max-w-sm border-r border-slate-200 break-words">
        <Brand />
        <Menu pages={['private', 'team', 'public']} />
      </div>
      <div className="w-full flex flex-col justify-between bg-slate-200">
        <div className="px-8 py-6 bg-white">
          <Header className="flex justify-between">
            <ToggleMenu />
            <CalendarViews />
            <Notifications />
          </Header>
        </div>
        <div className="overflow-y-auto w-full h-full mx-auto px-8 py-6 max-w-screen-xl">
          <Content>
            <div className="py-4 text-center">
              <h1 className="text-4xl">Coming soon</h1>
            </div>
          </Content>
          <div className="px-8 py-6">
            <Footer>
              <Copyrigth />
            </Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
