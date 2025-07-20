import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Latest from './components/Latest'
import Upcoming from './components/Upcoming'
import Footer from './components/Footer'
import Movies from './Movies'
import MovieLatest from './MovieLatest'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/latest" element={<Latest />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>

        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App
