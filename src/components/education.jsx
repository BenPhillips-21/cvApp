import React, { useState } from 'react';

function EducationHistory({ educations, setEducations, school, setSchool, degree, setDegree, schoolLocation, setSchoolLocation, startDate, setStartDate, endDate, setEndDate })
{
    return (
      <>
        {/* {educations.map((education, index) => (
          <div key={index}>
            <h3>{education.name}</h3>
            <p>{education.title}</p>
            <p>{education.email}</p>
            <p>{education.number}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
          </div>
        ))} */}
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
        {/* <button onClick={addEducation}>Add Education</button> */}
      </>
    );
      }



export default EducationHistory;

// const EducationHistory = () => {
//   return (
//     <>
//       <h3>Education History</h3>
//       <Education />
//     </>
//   );
// };
  // const addEducation = () => {
  //   setEducations([
  //     ...educations,
  //     { school, degree, schoolLocation, startDate, endDate }
  //   ]);
  //   setSchool('');
  //   setDegree('');
  //   setSchoolLocation('');
  //   setStartDate('');
  //   setEndDate('');
  // };

  // const addMore = () => {
  //   setStatus(0);
  // };

  // const remove = (key) => {
  //   let newEducations = [...educations];
  //   newEducations.splice(key, 1);
  //   setEducations(newEducations);
  // };

  // if (status >= 1) {
  //   return (
  //     <>
  //       {educations.map((education, index) => (
  //         <div key={index}>
  //           <h3>{education.name}</h3>
  //           <p>{education.title}</p>
  //           <p>{education.email}</p>
  //           <p>{education.number}</p>
  //           <p>Start Date: {education.startDate}</p>
  //           <p>End Date: {education.endDate}</p>
  //           <button onClick={() => remove(index)}>Delete</button>
  //         </div>
  //       ))}
  //       <button onClick={addMore}>Add More Education</button>
  //     </>
  //   );
  // } else {
