import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import System from './System'
import Navigation from './Navigation.jsx'
import CustomerDetails from './CustomerDetails.jsx'
import RoomDetails from './RoomDetails.jsx'


import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path ='/system' element ={<System />}/ >
        <Route path ='/CustomerDetails' element ={<CustomerDetails />}/ >
        <Route path ='/RoomDetails' element ={<RoomDetails />}/ >
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
