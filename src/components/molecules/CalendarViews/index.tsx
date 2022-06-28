import React from 'react'

const CalendarViews = () => {
  return (
    <div>
      <button className="mr-1 px-3 py-1 text-white bg-black hover:bg-slate-600 transition rounded">
        Mounth
      </button>
      <button className="mr-1 px-3 py-1 text-white bg-black hover:bg-slate-600 transition rounded">
        Week
      </button>
      <button className="mr-1 px-3 py-1 text-white bg-black hover:bg-slate-600 transition rounded">
        Day
      </button>
    </div>
  )
}

export default CalendarViews
