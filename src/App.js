import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Navigate} from "react-router-dom"
import About from './pages/About'
import Blog from './pages/Blog/Blog'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/blog" element={<Blog/>} />
   <Route path="*" element={<Navigate to="/"/>} />
  <Route path='/services' element={<Services />}/>
    <Route path='/contact' element={<Contact />} />
    
    </Routes>
  )
}

export default (App)