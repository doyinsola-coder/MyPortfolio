import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
