import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MultiStepForm from './Components/Forms/Form'
import JobForm from './Components/Forms/JobForm'
import Navbar from './Components/Home/Navbar'

const App = () => {
  return (
   <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<MultiStepForm />} />
        <Route path='/job-form' element={<JobForm />}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App