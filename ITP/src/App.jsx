import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import System from './system'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<system/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
