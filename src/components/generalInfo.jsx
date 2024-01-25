import React from 'react';
import { useState } from 'react'
function GeneralInfo() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [status, setStatus] = useState(false);
  
    function onSubmit() {
        setStatus(true)
    }

    if (status === false) {
    return (<>
    <label>Name:</label>
      <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
      /> <br></br>
      <label>Job Title:</label>
      <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
      /> <br></br>
    <label>E-Mail:</label>
      <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
      /> <br></br>
    <label>Phone Number:</label>
      <input
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
      /> <br></br>
      <button onClick={onSubmit}>Submit</button>
      </>
    );} else {
        return (
            <>
            <h3>{name}</h3>
            <h3>{title}</h3>
            <h3>{email}</h3>
            <h3>{number}</h3>
            </>
        )
    }
  }
  
  export default GeneralInfo;