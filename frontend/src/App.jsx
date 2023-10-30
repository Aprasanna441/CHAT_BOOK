import { useState } from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css'
import LoginSignup from './pages/LoginSignup'
import Home from './pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/chat' element={<Home/>}/>
      </Route>
      <Route path='/auth' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
