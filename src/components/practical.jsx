import React, { useState } from 'react';

function WorkHistory({ jobLocation, setJobLocation, works, setWorks, business, setBusiness, jobTitle, setJobTitle, responsibilities, setResponsibilities, startWorkDate, setStartWorkDate, endWorkDate, setEndWorkDate, workStatus, setWorkStatus }) {

  const [hiddenArray, setHiddenArray] = useState([]);

  const addWork = () => {
    const newWork = {
      id: business,
      business,
      jobTitle,
      responsibilities,
      startWorkDate,
      endWorkDate,
      jobLocation,
    }
    setWorks([...works, newWork]);
    setBusiness('');
    setJobTitle('');
    setResponsibilities('');
    setStartWorkDate('');
    setEndWorkDate('');
    setJobLocation('');
    setWorkStatus(0);
  };

  const addMore = () => {
    setWorkStatus(1);
  };

  const remove = (id) => {
    setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
  };

  const unHide = (id) => {
    console.log('unhide', id)
    for (let i = 0; i < hiddenArray.length; i++) {
      if (id === hiddenArray[i][0]) {
        const newWork = {
          id: hiddenArray[i][0],
          business: hiddenArray[i][0],
          jobTitle: hiddenArray[i][1],
          responsibilities: hiddenArray[i][2],
          startWorkDate: hiddenArray[i][3],
          endWorkDate: hiddenArray[i][4],
          jobLocation: hiddenArray[i][5]
        };
        const targetIndex = hiddenArray[i][6];
        const newWorks = [...works];
        if (hiddenArray[i][6] === 0) {
          newWorks.unshift(newWork);
        } else {
          newWorks.splice(targetIndex, 0, newWork);
        }
        setWorks(newWorks);        
        setHiddenArray((prevHiddenArray) =>
        prevHiddenArray.filter((item, id) => id !== i)
      );
      }
    }
  }

  const hide = (id) => {
    const targetWork = works.find((work) => work.id === id);
    let a = targetWork.business
    let b = targetWork.jobTitle
    let c = targetWork.responsibilities
    let d = targetWork.startWorkDate
    let e = targetWork.endWorkDate
    let f = targetWork.jobLocation
    const index = works.indexOf(targetWork);
    console.log(index)
    let newHiddenArray = ([a, b, c, d, e, f, index])
    setHiddenArray((prevHiddenArray) => [...prevHiddenArray, newHiddenArray])
    setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
  }

  const editWork = (id) => {
    const targetWork = works.find((work) => work.id === id);
  
    if (targetWork) {
      setBusiness(targetWork.business);
      setJobTitle(targetWork.jobTitle);
      setResponsibilities(targetWork.responsibilities);
      setStartWorkDate(targetWork.workStartDate);
      setEndWorkDate(targetWork.workEndDate);
      setJobLocation(targetWork.jobLocation);
  
      setWorks((prevWorks) =>
        prevWorks.filter((work) => work.id !== id)
      );
  
      setWorkStatus(1); 
    }
  }

  if (workStatus === 0) {
    return (
      <>
        {hiddenArray.length > 0 && <h4>Hidden</h4>}
          {hiddenArray.map((hiddenItem) => (
            <div key={hiddenItem[0]}>
              <button style={{ fontWeight: 'bold' }}>{hiddenItem[0]}</button>
              <button style={{ fontWeight: 'bold' }} onClick={() => unHide(hiddenItem[0])}>Unhide</button>
            </div>
              ))}
        {hiddenArray.length > 0 && <h4>Visible</h4>}
          {works.map((work) => (
            <div key={work.id}>
              <button style={{ fontWeight: 'bold' }} onClick={() => editWork(work.id)}>{work.business}</button>
              <button style={{ fontWeight: 'bold' }} onClick={() => remove(work.id)}>Delete</button>
              <button style={{ fontWeight: 'bold' }} onClick={() => hide(work.id)}>Hide</button>
            </div>
          ))}
        <button style={{ fontWeight: 'bold' }} onClick={addMore}>Add Work</button>
      </>
    );
  } else if (workStatus === 1) {
    return (
      <>
        <label>Business:</label> <br />
        <textarea
          rows="1"
          cols="30"
          value={business}
          onChange={(event) => setBusiness(event.target.value)}
        />
        <br />

        <label>Job Title:</label> <br />
        <textarea
          rows="1"
          cols="30"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />
        <br />

        <label>Job Location:</label> <br />
        <textarea
          rows="1"
          cols="30"
          value={jobLocation}
          onChange={(event) => setJobLocation(event.target.value)}
        />
        <br />

        <label>Start Date:</label> <br />
        <textarea
          rows="1"
          cols="30"
          value={startWorkDate}
          onChange={(event) => setStartWorkDate(event.target.value)}
        />
        <br />

        <label>End Date:</label> <br />
        <textarea
          rows="1"
          cols="30"
          value={endWorkDate}
          onChange={(event) => setEndWorkDate(event.target.value)}
        />
        <br />

        <label>Responsibilities:</label> <br />
        <textarea
          rows="5"
          cols="30"
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.target.value)}
        />
        <br />
        <button style={{ fontWeight: 'bold' }} onClick={addWork}>Save</button>
      </>
    );
  }
}

export default WorkHistory;



