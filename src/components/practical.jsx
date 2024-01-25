import React, { useState } from 'react';
const Work = () => {
  const [works, setWorks] = useState([]);
  const [business, setBusiness] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState(0);

  const addWork = () => {
    setWorks([...works, { business, jobTitle, responsibilities, startDate, endDate }]);
    setBusiness('');
    setJobTitle('');
    setResponsibilities('');
    setStartDate('');
    setEndDate('');
    setStatus(1);
  };

  const addMore = () => {
    setStatus(0);
  };

  const remove = (key) => {
    let newWorks = [...works];
    newWorks.splice(key, 1);
    setWorks(newWorks);
  };

  if (status >= 1) {
    return (
      <>
        {works.map((work, index) => (
          <div key={index}>
            <h3>{work.business}</h3>
            <p>{work.jobTitle}</p>
            <p>{work.responsibilities}</p>
            <p>Start Date: {work.startDate}</p>
            <p>End Date: {work.endDate}</p>
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <button onClick={addMore}>Add More Work</button>
      </>
    );
  } else {
    return (
      <>
        {works.map((work, index) => (
          <div key={index}>
            <h3>{work.business}</h3>
            <p>{work.jobTitle}</p>
            <p>{work.responsibilities}</p>
            <p>Start Date: {work.startDate}</p>
            <p>End Date: {work.endDate}</p>
          </div>
        ))}
        <label>Business:</label> <br></br>
        <input
          type="text"
          value={business}
          onChange={(event) => setBusiness(event.target.value)}
        />
        <br />
        <label>Job Title:</label> <br></br>
        <input
          type="text"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />
        <br />
        <label>Responsibilities:</label> <br></br>
        <input
          type="text"
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.target.value)}
        />
        <br />
        <label>Start Date:</label> <br></br>
        <input
          type="text"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <br />
        <label>End Date:</label> <br></br>
        <input
          type="text"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
        <br />
        <button onClick={addWork}>Submit Work</button>
      </>
    );
  }
};

const WorkHistory = () => {
  return (
    <>
      <h3>Work History</h3>
      <Work />
    </>
  );
};

export default WorkHistory;


