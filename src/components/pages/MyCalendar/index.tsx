import React from 'react'
import Base from '../../templates/Base'
import Content from '../../organisms/Content'
import Calendar from '../../organisms/Calendar'
import Title from '../../molecules/Title'
import dayjs from 'dayjs'

const MyCalendar = () => {
  const currentYear = dayjs().format('YYYY')
  const currentMonth = dayjs().format('MMMM')

  return (
    <Base>
      <Content>
        <Title title={currentMonth} subtitle={currentYear} />
        <Calendar />
      </Content>
    </Base>
  )
}

export default MyCalendar
