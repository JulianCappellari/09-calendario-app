import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import CalendarioScree from '../components/calendario/CalendarioScree'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path='/login'
          element={<LoginScreen/>}
        />
        <Route
          exact
          path='/'
          element={<CalendarioScree/>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default AppRouter
