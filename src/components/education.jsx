import React, { useState } from 'react';

function EducationHistory({ edit, setEdit, state, setState, educations, setEducations, school, setSchool, degree, setDegree, schoolLocation, setSchoolLocation, startDate, setStartDate, endDate, setEndDate })
{

  function handleAddEducaation() {
    setState(1)
  }

  function editEducation(index) {
    setEdit(educations[index])
    setSchool(edit.school);
    setDegree(edit.degree);
    setSchoolLocation(edit.schoolLocation);
    setStartDate(edit.startDate);
    setEndDate(edit.endDate);
    setEducations((prevEducations) =>
    prevEducations.filter((education, ind) => ind !== index)
    );
    setState(2)
  }

  function handleSave() {
    setEducations([
      ...educations,
      { school, degree, schoolLocation, startDate, endDate }
    ]);
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
      {educations.map((education, index) => (
        <div key={index}>
            <button onClick={() => editEducation(index)}>{education.school}</button>
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
    ); } else {
      return (
        <>
          <label>School Name:</label> <br />
          <input
            type="text"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
            placeholder={edit.school}
          />
          <br />
          {/* <label>Degree Title:</label> <br />
          <input
            type="text"
            value={degree}
            onChange={(event) => setDegree(event.target.value)}
            placeholder={edit.degree}
          />
          <br />
          <label>School Location:</label> <br />
          <input
            type="text"
            value={schoolLocation}
            onChange={(event) => setSchoolLocation(event.target.value)}
            placeholder={edit.schoolLocation}
          />
          <br />
          <label>Start Date:</label> <br />
          <input
            type="text"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            placeholder={edit.startDate}
          />
          <br />
          <label>End Date:</label> <br />
          <input
            type="text"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            placeholder={edit.endDate}
          />
          <br /> */}
          <button onClick={handleSave}>Save Edit</button>
        </>
      )
    }
    }

export default EducationHistory;