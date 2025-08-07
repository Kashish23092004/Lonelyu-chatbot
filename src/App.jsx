import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Chatbot from './components/Chatbot'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/chatbot' element={<Chatbot/>}/>
    </Routes>
    </>
  )
}

export default App
