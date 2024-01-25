import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/styles.css'
import GeneralInfo from './components/generalInfo.jsx'
import EducationHistory from './components/education.jsx'
import WorkHistory from './components/practical.jsx'
import Resume from './components/resume.jsx'

function App() {

  return (
    <>
    <div className="papa-container">
    <div className="app-container">
      <div className="section">
        <GeneralInfo />
      </div>
      <div className="section">
        <EducationHistory />
      </div>
      <div className="section">
        <WorkHistory />
      </div>
    </div>
    <div className="resume-container">
      <Resume />
    </div>
    </div>
    </>
  )
}

export default App
