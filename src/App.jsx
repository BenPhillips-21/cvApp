import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/styles.css'
import GeneralInfo from './components/generalInfo.jsx'
import EducationHistory from './components/education.jsx'
import WorkHistory from './components/practical.jsx'
import Resume from './components/resume.jsx'

function App() {
  const [sharedState, setSharedState] = useState('');

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState(false);

  return (
    <>
    <p>Parent Component State: {sharedState}</p>
    <div className="papa-container">
    <div className="app-container">
      <div className="section">
        <GeneralInfo location={location} setLocation={setLocation} name={name} setName={setName} title={title} setTitle={setTitle} email={email} setEmail={setEmail} number={number} setNumber={setNumber} status={status} setStatus={setStatus} />
      </div>
      <div className="section">
        <EducationHistory />
      </div>
      <div className="section">
        <WorkHistory />
      </div>
    </div>
    <div className="resume-container">
      <Resume location={location} setLocation={setLocation} name={name} setName={setName} title={title} setTitle={setTitle} email={email} setEmail={setEmail} number={number} setNumber={setNumber} status={status} setStatus={setStatus} />
    </div>
    </div>
    </>
  )
}

export default App
