import React, { useState } from 'react';

function EducationHistory({ state, setState, educations, setEducations, school, setSchool, degree, setDegree, schoolLocation, setSchoolLocation, startDate, setStartDate, endDate, setEndDate })
{

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
    const newEducation = {
      id: school,
      school,
      degree,
      schoolLocation,
      startDate,
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
      {educations.map((education) => (
        <div key={education.id}>
            <button onClick={() => editEducation(education.id)}>{education.school}</button>
            <button onClick={() => remove(education.id)}>Delete</button>
        </div>
        ))}
      <button onClick={handleAddEducaation}>+ Education</button>
      </>
    )
  } else if (state === 1) {
    return (
      <>
        <label>School Name:</label> <br></br>
        <input
          type="text"
          value={school}
          onChange={(event) => setSchool(event.target.value)}
        />
        <br />
        <label>Degree Title:</label> <br></br>
        <input
          type="text"
          value={degree}
          onChange={(event) => setDegree(event.target.value)}
        />
        <br />
        <label>School Location:</label> <br></br>
        <input
          type="text"
          value={schoolLocation}
          onChange={(event) => setSchoolLocation(event.target.value)}
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
        <button onClick={handleSave}>Save</button>
      </>
    ) } 
    }

export default EducationHistory;