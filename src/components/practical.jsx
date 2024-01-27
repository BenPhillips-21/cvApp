import React, { useState } from 'react';

function WorkHistory({ works, setWorks, business, setBusiness, jobTitle, setJobTitle, responsibilities, setResponsibilities, startWorkDate, setStartWorkDate, endWorkDate, setEndWorkDate, workStatus, setWorkStatus }) {

  const addWork = () => {
    const newWork = {
      id: business,
      business,
      jobTitle,
      responsibilities,
      startWorkDate,
      endWorkDate
    }
    setWorks([...works, newWork]);
    setBusiness('');
    setJobTitle('');
    setResponsibilities('');
    setStartWorkDate('');
    setEndWorkDate('');
    setWorkStatus(0);
  };

  const addMore = () => {
    setWorkStatus(1);
  };

  const remove = (key) => {
    let newWorks = [...works];
    newWorks.splice(key, 1);
    setWorks(newWorks);
  };

  const editWork = (id) => {
    console.log(id)

    const targetWork = works.find((work) => work.id === id);
  
    if (targetWork) {
      setBusiness(targetWork.business);
      setJobTitle(targetWork.jobTitle);
      setResponsibilities(targetWork.responsibilities);
      setStartWorkDate(targetWork.workStartDate);
      setEndWorkDate(targetWork.workEndDate);
  
      setWorks((prevWorks) =>
        prevWorks.filter((work) => work.id !== id)
      );
  
      setWorkStatus(1); 
    }
  }

  if (workStatus === 0) {
    return (
      <>
        {works.map((work) => (
          <div key={work.id}>
            <button onClick={() => editWork(work.id)}>{work.business}</button>
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <button onClick={addMore}>+ Work</button>
      </>
    );
  } else if (workStatus === 1) {
    return (
      <>
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
          value={startWorkDate}
          onChange={(event) => setStartWorkDate(event.target.value)}
        />
        <br />
        <label>End Date:</label> <br></br>
        <input
          type="text"
          value={endWorkDate}
          onChange={(event) => setEndWorkDate(event.target.value)}
        />
        <br />
        <button onClick={addWork}>Submit Work</button>
      </>
    );
  }
}

export default WorkHistory;



