import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Signin from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './components/Header/Header'

export const App = () => {
  return (
    <BrowserRouter>
    <Header />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<SignUp />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
