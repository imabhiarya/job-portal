import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/browse' element={<Browse />} />

      </Routes>
    </>
  )
}

export default App
