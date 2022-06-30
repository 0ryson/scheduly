import React from 'react'
import Content from '../../organisms/Content'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import Menu from '../../molecules/Menu'
import CalendarViews from '../../molecules/CalendarViews'
import ToggleMenu from '../../molecules/ToggleMenu'
import Brand from '../../molecules/Brand'
import Notifications from '../../molecules/Notifications'
import Copyrigth from '../../molecules/Copyright'
import dayjs from 'dayjs'

const eventsMonthByDay = [
  {
    day: 27,
    events: [
      {
        id: 123456,
        date: {
          y: 2022,
          m: 6,
          d: 28,
        },
        time: { h: 15, m: 30 },
        name: 'Event 1',
        content: 'Event content',
      },
    ],
  },
  {
    day: 29,
    events: [
      {
        id: 789123,
        date: {
          y: 2022,
          m: 6,
          d: 30,
        },
        time: { h: 9, m: 0 },
        name: 'Event 2',
        content: 'Event content',
      },
    ],
  },
  {
    day: 17,
    events: [
      {
        id: 456789,
        date: {
          y: 2022,
          m: 6,
          d: 18,
        },
        time: { h: 12, m: 15 },
        name: 'Event 3',
        content: 'Event content',
      },
      {
        id: 123456,
        date: {
          y: 2022,
          m: 6,
          d: 18,
        },
        time: { h: 18, m: 45 },
        name: 'Event 4',
        content: 'Event content',
      },
    ],
  },
]

const Calendar = () => {
  const currentYear = dayjs().format('YYYY')
  console.log('currentYear', currentYear)
  const currentMonth = dayjs().format('MMMM')
  console.log('currentMonth', currentMonth)
  const currentMonthNumber = parseInt(dayjs().format('M'))
  console.log('currentMonthNumber', currentMonthNumber)
  const currentDay = parseInt(dayjs().format('D'))
  console.log('currentDay', currentDay)

  const daysInMonth = dayjs().daysInMonth()
  console.log('daysInMonth', daysInMonth)
  const firstDayEn = parseInt(dayjs().date(1).format('d'))
  const firstDay = firstDayEn === 0 ? 7 : firstDayEn
  console.log('firstDay', firstDay)

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
        <div className="overflow-y-auto w-full h-full mx-auto px-8 py-6 max-w-screen-xl">
          <Content>
            <div>
              <div className=" text-2xl text-center">{currentYear}</div>
              <h2 className="pb-6 text-4xl font-bold text-center">
                {currentMonth}
              </h2>
            </div>
            <div>
              <ol className="grid grid-cols-7 gap-1">
                {[...new Array(daysInMonth)].map((_, dayNumber) => {
                  return (
                    <li
                      key={dayNumber}
                      className={`p-3 bg-white h-32 border hover:border-black transition ${
                        dayNumber === 0 && ` col-start-${firstDay}`
                      }`}
                    >
                      <span
                        className={`inline-block mb-1 p-1 w-7 h-7 text-sm ${
                          currentDay === dayNumber + 1 &&
                          'bg-red-600 rounded-full text-white text-center'
                        }`}
                      >
                        {dayNumber + 1}
                      </span>
                      {eventsMonthByDay
                        .filter((item) => item.day === dayNumber)
                        .map((obj, iObj) => {
                          return obj.events.map((event, iEvent) => {
                            return (
                              <div
                                className="inline-block w-full mr-1/2 mb-1/2 py-1 px-2 text-xs text-white bg-black rounded-sm"
                                key={iEvent}
                              >
                                {event.name}
                              </div>
                            )
                          })
                        })}
                    </li>
                  )
                })}
              </ol>
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

export default Calendar
