import React from 'react'
import Calendar from './components/pages/calendar'
import MainProvider from './contexts/MainProvider'
import './App.css'

function App() {
  return (
    <MainProvider>
      <Calendar />
    </MainProvider>
  )
}

export default App
