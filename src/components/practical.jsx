import React, { useState } from 'react';

function WorkHistory({ works, setWorks, business, setBusiness, jobTitle, setJobTitle, responsibilities, setResponsibilities, startWorkDate, setStartWorkDate, endWorkDate, setEndWorkDate, workStatus, setWorkStatus }) {

  const [hiddenArray, setHiddenArray] = useState([]);

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
          endWorkDate: hiddenArray[i][4]
        };
        const targetIndex = hiddenArray[i][5];
        const newWorks = [...works];
        if (hiddenArray[i][5] === 0) {
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
    const index = works.indexOf(targetWork);
    console.log(index)
    let newHiddenArray = ([a, b, c, d, e, index])
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
              <button>{hiddenItem[0]}</button>
              <button onClick={() => unHide(hiddenItem[0])}>Unhide</button>
            </div>
              ))}
        {hiddenArray.length > 0 && <h4>Visible</h4>}
          {works.map((work) => (
            <div key={work.id}>
              <button onClick={() => editWork(work.id)}>{work.business}</button>
              <button onClick={() => remove(work.id)}>Delete</button>
              <button onClick={() => hide(work.id)}>Hide</button>
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
        <button onClick={addWork}>Save</button>
      </>
    );
  }
}

export default WorkHistory;



