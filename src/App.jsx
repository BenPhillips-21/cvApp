import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/styles.css'
import GeneralInfo from './components/generalInfo.jsx'
import EducationHistory from './components/education.jsx'
import WorkHistory from './components/practical.jsx'
import Resume from './components/resume.jsx'
import ClearLoad from './components/clearLoad.jsx'

function App() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState(false);

  const [educations, setEducations] = useState([]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [state, setState] = useState(0)

  const [works, setWorks] = useState([]);
  const [business, setBusiness] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startWorkDate, setStartWorkDate] = useState('');
  const [endWorkDate, setEndWorkDate] = useState('');
  const [workStatus, setWorkStatus] = useState(0);

  return (
    <>
    <div className="papa-container">
    <div className="app-container">
      <div className="section">
      <ClearLoad works={works} setWorks={setWorks} business={business} setBusiness={setBusiness} jobTitle={jobTitle} setJobTitle={setJobTitle} responsibilities={responsibilities} setResponsibilities={setResponsibilities} startWorkDate={startWorkDate} setStartWorkDate={setStartWorkDate} endWorkDate={endWorkDate} setEndWorkDate={setEndWorkDate} workStatus={workStatus} setWorkStatus={setWorkStatus} state={state} setState={setState} location={location} setLocation={setLocation} name={name} setName={setName} title={title} setTitle={setTitle} email={email} setEmail={setEmail} number={number} setNumber={setNumber} status={status} setStatus={setStatus} educations={educations} setEducations={setEducations} school={school} setSchool={setSchool} degree={degree} setDegree={setDegree} schoolLocation={schoolLocation} setSchoolLocation={setSchoolLocation} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
      </div>
      <div className="section">
        <GeneralInfo location={location} setLocation={setLocation} name={name} setName={setName} title={title} setTitle={setTitle} email={email} setEmail={setEmail} number={number} setNumber={setNumber} status={status} setStatus={setStatus} />
      </div>
      <div className="section">
        <EducationHistory state={state} setState={setState} educations={educations} setEducations={setEducations} school={school} setSchool={setSchool} degree={degree} setDegree={setDegree} schoolLocation={schoolLocation} setSchoolLocation={setSchoolLocation} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
      </div>
      <div className="section">
        <WorkHistory works={works} setWorks={setWorks} business={business} setBusiness={setBusiness} jobTitle={jobTitle} setJobTitle={setJobTitle} responsibilities={responsibilities} setResponsibilities={setResponsibilities} startWorkDate={startWorkDate} setStartWorkDate={setStartWorkDate} endWorkDate={endWorkDate} setEndWorkDate={setEndWorkDate} workStatus={workStatus} setWorkStatus={setWorkStatus}/>
      </div>
    </div>
    <div className="resume-container">
      <Resume works={works} business={business} jobTitle={jobTitle} responsibilities={responsibilities} startWorkDate={startWorkDate} endWorkDate={endWorkDate} workStatus={workStatus} state={state} location={location} name={name} title={title} email={email} number={number} status={status} educations={educations} school={school} degree={degree} schoolLocation={schoolLocation} startDate={startDate} endDate={endDate} state={state} />
    </div>
    </div>
    </>
  )
}

export default App
