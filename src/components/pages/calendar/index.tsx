import React, { useContext } from 'react'
import Content from '../../organisms/content'
import Footer from '../../organisms/footer'
import Header from '../../organisms/header'
import Menu from '../../organisms/menu'
import MainContext from '../../../contexts/MainContext'

const Calendar = () => {
  //const { value, setValue } = useContext(MainContext)

  return (
    <div className="app layout-calendar w-full bg-slate-300">
      <div className="w-full bg-emerald-200">
        <div className="max-w-screen-xl mx-auto  bg-lime-400">
          <Header>Header</Header>
        </div>
      </div>
      <div className="w-full bg-cyan-100">
        <div className="max-w-screen-xl mx-auto grid xl:grid-cols-5 sm:grid-cols-4">
          <Menu>Menu</Menu>
          <Content>Content</Content>
        </div>
      </div>
      <div className="w-full bg-orange-200">
        <div className="max-w-screen-xl mx-auto  bg-yellow-400">
          <Footer>Footer</Footer>
        </div>
      </div>
    </div>
  )
}

export default Calendar
