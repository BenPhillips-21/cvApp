import React, { useState } from 'react';

function EducationHistory({ state, setState, educations, setEducations, school, setSchool, degree, setDegree, schoolLocation, setSchoolLocation, startDate, setStartDate, endDate, setEndDate })
{

  const [hiddenArray, setHiddenArray] = useState([]);

  const unHide = (id) => {
    console.log('unhide', id)
    for (let i = 0; i < hiddenArray.length; i++) {
      if (id === hiddenArray[i][0]) {
        const newEducation = {
          id: hiddenArray[i][0],
          school: hiddenArray[i][0],
          degree: hiddenArray[i][1],
          schoolLocation: hiddenArray[i][2],
          startDate: hiddenArray[i][3],
          endDate: hiddenArray[i][4]
        };
        const targetIndex = hiddenArray[i][5];
        const newEducations = [...educations];
        if (hiddenArray[i][5] === 0) {
          newEducations.unshift(newEducation);
        } else {
          newEducations.splice(targetIndex, 0, newEducation);
        }
        setEducations(newEducations);        
        setHiddenArray((prevHiddenArray) =>
        prevHiddenArray.filter((item, id) => id !== i)
      );
      }
    }
  }

  const hide = (id) => {
    const targetEducation = educations.find((education) => education.id === id);
    let a = targetEducation.school
    let b = targetEducation.degree
    let c = targetEducation.schoolLocation
    let d = targetEducation.startDate
    let e = targetEducation.endDate
    const index = educations.indexOf(targetEducation);
    console.log(index)
    let newHiddenArray = ([a, b, c, d, e, index])
    setHiddenArray((prevHiddenArray) => [...prevHiddenArray, newHiddenArray])
    setEducations((prevEducations) => prevEducations.filter((education) => education.id !== id));
  }

  function handleAddEducaation() {
    setState(1)
  }


  function editEducation(id) {
    console.log(id);
  
    const targetEducation = educations.find((education) => education.id === id);
  
    if (targetEducation) {
      setSchool(targetEducation.school);
      setDegree(targetEducation.degree);
      setSchoolLocation(targetEducation.schoolLocation);
      setStartDate(targetEducation.startDate);
      setEndDate(targetEducation.endDate);
  
      setEducations((prevEducations) =>
        prevEducations.filter((education) => education.id !== id)
      );
  
      setState(1); 
    }
  }
  
  const remove = (id) => {
    setEducations((prevEducations) => prevEducations.filter((education) => education.id !== id));
  };

  function handleSave() {
    const displayStartDate = startDate + ' - ';
    const newEducation = {
      id: school,
      school,
      degree,
      schoolLocation,
      startDate: displayStartDate,
      endDate,
    };
    setEducations([...educations, newEducation]);
    setSchool('');
    setDegree('');
    setSchoolLocation('');
    setStartDate('');
    setEndDate('');
    setState(0)
  }

  if (state === 0) {
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
      {educations.map((education) => (
        <div key={education.id}>
            <button onClick={() => editEducation(education.id)}>{education.school}</button>
            <button onClick={() => remove(education.id)}>Delete</button>
            <button onClick={() => hide(education.id)}>Hide</button>
        </div>
        ))}
      <button onClick={handleAddEducaation}>Add Education</button>
      </>
    )
  } else if (state === 1) {
    return (
<>
  <label>School Name:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={school}
    onChange={(event) => setSchool(event.target.value)}
  />
  <br />

  <label>Degree Title:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={degree}
    onChange={(event) => setDegree(event.target.value)}
  />
  <br />

  <label>School Location:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={schoolLocation}
    onChange={(event) => setSchoolLocation(event.target.value)}
  />
  <br />

  <label>Start Date:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={startDate}
    onChange={(event) => setStartDate(event.target.value)}
  />
  <br />

  <label>End Date:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={endDate}
    onChange={(event) => setEndDate(event.target.value)}
  />
  <br />

  <button onClick={handleSave}>Save</button>
</>
    ) } 
    }

export default EducationHistory;