import React, { useRef, useState } from 'react';
import generatePDF from 'react-to-pdf';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/styles.css';
import GeneralInfo from './components/generalInfo.jsx';
import EducationHistory from './components/education.jsx';
import WorkHistory from './components/practical.jsx';
import Resume from './components/resume.jsx';
import ClearLoad from './components/clearLoad.jsx';
import Customize from './components/customize.jsx';
import Colour from './components/changeColour.jsx';
import Font from './components/changeFont.jsx';
import { Helmet } from 'react-helmet';
function App() {
  const targetRef = useRef();

  const [name, setName] = useState('Benjamin Phillips');
  const [title, setTitle] = useState('Junior Software Developer');
  const [email, setEmail] = useState('pben012@gmail.com');
  const [number, setNumber] = useState('0480 494 579');
  const [location, setLocation] = useState('Melbourne, Australia');
  const [status, setStatus] = useState(false);

  const [educations, setEducations] = useState([]);
  const [school, setSchool] = useState('Coder Academy');
  const [degree, setDegree] = useState('Full Stack Web Development Course');
  const [schoolLocation, setSchoolLocation] = useState('Melbourne');
  const [startDate, setStartDate] = useState('Mar 2023');
  const [endDate, setEndDate] = useState('Sep 2023');
  const [state, setState] = useState(1);

  const [works, setWorks] = useState([]);
  const [business, setBusiness] = useState('DeployPartners');
  const [jobTitle, setJobTitle] = useState('Software Development Intern');
  const [responsibilities, setResponsibilities] = useState('Collaborated within a team to develop a React dashboard application, actively participating in sprint planning, daily stand-ups, and retrospective meetings. Designed and implemented Docker containers to encapsulate applications, ensuring consistent and reproducible deployments across different environments.');
  const [startWorkDate, setStartWorkDate] = useState('Sep 2023');
  const [endWorkDate, setEndWorkDate] = useState('Dec 2023');
  const [jobLocation, setJobLocation] = useState('Melbourne');
  const [workStatus, setWorkStatus] = useState(1);

  const [page, setPage] = useState('content');

  const [colour, setColour] = useState('#0e374e')

  const [font, setFont] = useState('serif')

  if (page === 'content') {
    return (
      <>
        <div className="papa-container">
        <Helmet>
        <title>Résumé Generator</title>
        <link rel="icon" type="image/png" href="/icons8-resume-ios-17-96.png" />
      </Helmet>
            <div className="app-container">
              <div className="container-container">
              <div className="section">
                <Customize page={page} setPage={setPage}/>
              </div>
              <div className="unique-section">
                <ClearLoad
                  jobLocation={jobLocation}
                  setJobLocation={setJobLocation}
                  works={works}
                  setWorks={setWorks}
                  business={business}
                  setBusiness={setBusiness}
                  jobTitle={jobTitle}
                  setJobTitle={setJobTitle}
                  responsibilities={responsibilities}
                  setResponsibilities={setResponsibilities}
                  startWorkDate={startWorkDate}
                  setStartWorkDate={setStartWorkDate}
                  endWorkDate={endWorkDate}
                  setEndWorkDate={setEndWorkDate}
                  workStatus={workStatus}
                  setWorkStatus={setWorkStatus}
                  state={state}
                  setState={setState}
                  location={location}
                  setLocation={setLocation}
                  name={name}
                  setName={setName}
                  title={title}
                  setTitle={setTitle}
                  email={email}
                  setEmail={setEmail}
                  number={number}
                  setNumber={setNumber}
                  status={status}
                  setStatus={setStatus}
                  educations={educations}
                  setEducations={setEducations}
                  school={school}
                  setSchool={setSchool}
                  degree={degree}
                  setDegree={setDegree}
                  schoolLocation={schoolLocation}
                  setSchoolLocation={setSchoolLocation}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div className="section">
              <button style={{ fontWeight: 'bold' }} onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button>
              </div>
              <div className="section">
                <GeneralInfo
                  location={location}
                  setLocation={setLocation}
                  name={name}
                  setName={setName}
                  title={title}
                  setTitle={setTitle}
                  email={email}
                  setEmail={setEmail}
                  number={number}
                  setNumber={setNumber}
                  status={status}
                  setStatus={setStatus}
                />
              </div>
              <div className="section">
                <EducationHistory
                  state={state}
                  setState={setState}
                  educations={educations}
                  setEducations={setEducations}
                  school={school}
                  setSchool={setSchool}
                  degree={degree}
                  setDegree={setDegree}
                  schoolLocation={schoolLocation}
                  setSchoolLocation={setSchoolLocation}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div className="section">
                <WorkHistory
                  jobLocation={jobLocation}
                  setJobLocation={setJobLocation}
                  works={works}
                  setWorks={setWorks}
                  business={business}
                  setBusiness={setBusiness}
                  jobTitle={jobTitle}
                  setJobTitle={setJobTitle}
                  responsibilities={responsibilities}
                  setResponsibilities={setResponsibilities}
                  startWorkDate={startWorkDate}
                  setStartWorkDate={setStartWorkDate}
                  endWorkDate={endWorkDate}
                  setEndWorkDate={setEndWorkDate}
                  workStatus={workStatus}
                  setWorkStatus={setWorkStatus}
                />
              </div>
            </div>
          </div>
          <div ref={targetRef} className="resume-container">
            <Resume
              font={font}
              colour={colour}
              jobLocation={jobLocation}
              works={works}
              business={business}
              jobTitle={jobTitle}
              responsibilities={responsibilities}
              startWorkDate={startWorkDate}
              endWorkDate={endWorkDate}
              workStatus={workStatus}
              state={state}
              location={location}
              name={name}
              title={title}
              email={email}
              number={number}
              status={status}
              educations={educations}
              school={school}
              degree={degree}
              schoolLocation={schoolLocation}
              startDate={startDate}
              endDate={endDate}
              state={state}
            />
          </div>
          </div>
      </>
    );
  } else {
    return (
      <>
        <div className="papa-container">
          <div className="container-container">
            <div className="app-container">
              <div className="section">
                <Customize page={page} setPage={setPage}/>
              </div>
              <div className="unique-section">
                <ClearLoad
                  jobLocation={jobLocation}
                  setJobLocation={setJobLocation}
                  works={works}
                  setWorks={setWorks}
                  business={business}
                  setBusiness={setBusiness}
                  jobTitle={jobTitle}
                  setJobTitle={setJobTitle}
                  responsibilities={responsibilities}
                  setResponsibilities={setResponsibilities}
                  startWorkDate={startWorkDate}
                  setStartWorkDate={setStartWorkDate}
                  endWorkDate={endWorkDate}
                  setEndWorkDate={setEndWorkDate}
                  workStatus={workStatus}
                  setWorkStatus={setWorkStatus}
                  state={state}
                  setState={setState}
                  location={location}
                  setLocation={setLocation}
                  name={name}
                  setName={setName}
                  title={title}
                  setTitle={setTitle}
                  email={email}
                  setEmail={setEmail}
                  number={number}
                  setNumber={setNumber}
                  status={status}
                  setStatus={setStatus}
                  educations={educations}
                  setEducations={setEducations}
                  school={school}
                  setSchool={setSchool}
                  degree={degree}
                  setDegree={setDegree}
                  schoolLocation={schoolLocation}
                  setSchoolLocation={setSchoolLocation}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div className="section">
                <h2>Change Colour</h2>
                <Colour colour={colour} setColour={setColour}/>
                </div>
                <div className="section">
                <h2>Change Font</h2>
                <Font font={font} setFont={setFont}/>
                </div>
            </div>
          </div>
          <div ref={targetRef} className="resume-container">
            <Resume
              font={font}
              colour={colour}
              jobLocation={jobLocation}
              works={works}
              business={business}
              jobTitle={jobTitle}
              responsibilities={responsibilities}
              startWorkDate={startWorkDate}
              endWorkDate={endWorkDate}
              workStatus={workStatus}
              state={state}
              location={location}
              name={name}
              title={title}
              email={email}
              number={number}
              status={status}
              educations={educations}
              school={school}
              degree={degree}
              schoolLocation={schoolLocation}
              startDate={startDate}
              endDate={endDate}
              state={state}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
