import dayjs from 'dayjs'
import React from 'react'

const Copyrigth = () => {
  return (
    <div className="text-xs text-center">
      Scheduly © Copyrigth {dayjs().format('YYYY')}
    </div>
  )
}

export default Copyrigth
