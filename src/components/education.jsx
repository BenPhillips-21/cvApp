import React, { useState } from 'react';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState(0);

  const addEducation = () => {
    setEducations([
      ...educations,
      { name, title, email, number, startDate, endDate }
    ]);
    setName('');
    setTitle('');
    setEmail('');
    setNumber('');
    setStartDate('');
    setEndDate('');
    setStatus(1);
  };

  const addMore = () => {
    setStatus(0);
  };

  const remove = (key) => {
    let newEducations = [...educations];
    newEducations.splice(key, 1);
    setEducations(newEducations);
  };

  if (status >= 1) {
    return (
      <>
        {educations.map((education, index) => (
          <div key={index}>
            <h3>{education.name}</h3>
            <p>{education.title}</p>
            <p>{education.email}</p>
            <p>{education.number}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <button onClick={addMore}>Add More Education</button>
      </>
    );
  } else {
    return (
      <>
        {educations.map((education, index) => (
          <div key={index}>
            <h3>{education.name}</h3>
            <p>{education.title}</p>
            <p>{education.email}</p>
            <p>{education.number}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
          </div>
        ))}
        <label>Name:</label> <br></br>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Job Title:</label> <br></br>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label>E-Mail:</label> <br></br>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Phone Number:</label> <br></br>
        <input
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
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
        <button onClick={addEducation}>Submit Education</button>
      </>
    );
  }
};

const EducationHistory = () => {
  return (
    <>
      <h3>Education History</h3>
      <Education />
    </>
  );
};

export default EducationHistory;
