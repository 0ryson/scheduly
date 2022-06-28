import React, { useContext } from 'react'
import Content from '../../organisms/content'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import Menu from '../../organisms/menu'
import dayjs from 'dayjs'

const Calendar = () => {
  //const { value, setValue } = useContext(MainContext)

  return (
    <div className="w-full h-screen flex bg-white">
      <div className="px-8 py-6 max-w-sm break-words">
        <Menu>Menu</Menu>
      </div>
      <div className="w-full flex flex-col justify-between bg-slate-200">
        <div className="px-8 py-6 bg-white">
          <Header>
            <h1 className="text-3xl font-bold">Scheduly</h1>
          </Header>
        </div>
        <div className="h-full px-8 py-6 max-w-screen-xl">
          <Content>Content</Content>
        </div>
        <div className="px-8 py-6">
          <Footer>Scheduly © Copyrigth {dayjs().format('YYYY')}</Footer>
        </div>
      </div>
    </div>
  )
}

export default Calendar
