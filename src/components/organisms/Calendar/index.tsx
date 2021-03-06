import dayjs from 'dayjs'
import React, { useState } from 'react'
import Title from '../../molecules/Title'
import Modal from '../Modal'

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
  const currentMonthNumber = parseInt(dayjs().format('M'))
  const currentDay = parseInt(dayjs().format('D'))
  const daysInMonth = dayjs().daysInMonth()
  const firstDay = parseInt(dayjs().date(1).format('d'))

  return (
    <div>
      <ol className="grid grid-cols-7 gap-1">
        {[...new Array(firstDay - 1)].map((_, i) => (
          <li key={'-' + i}></li>
        ))}
        {[...new Array(daysInMonth)].map((_, dayNumber) => {
          return (
            <li
              key={dayNumber}
              className="px-2 py-1 sm:px-3 sm:py-2 bg-white h-16 sm:h-32 border hover:border-black transition"
            >
              <span
                className={`inline-block pr-2 text-sm ${
                  currentDay === dayNumber + 1 && 'text-red-600'
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
                        className="inline-block h-2 w-2 text-xs text-white border border-white bg-black rounded-full"
                        key={iEvent}
                      ></div>
                    )
                  })
                })}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Calendar
