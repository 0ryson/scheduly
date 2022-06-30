import React from 'react'
import MyCalendar from './components/pages/MyCalendar'
import ComingSoon from './components/pages/ComingSoon'
import NotFound from './components/pages/NotFound'
import MainProvider from './contexts/MainProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyCalendar />} />
          <Route path="my-calendar" element={<MyCalendar />} />
          <Route path="for-teams" element={<ComingSoon />} />
          <Route path="public" element={<ComingSoon />} />
          <Route path="account" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
