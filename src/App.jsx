import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo.jsx'
import EducationHistory from './components/education.jsx'

function App() {

  return (
    <>
    <GeneralInfo />
    <EducationHistory />
    </>
  )
}

export default App
