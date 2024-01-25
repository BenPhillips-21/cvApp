import React from 'react';
import { useState } from 'react'
function GeneralInfo({ location, setLocation, name, setName, title, setTitle, email, setEmail, number, setNumber, status, setStatus }) {
    return (<>
    <h3>General Information:</h3>
    <label>Name:</label> <br></br>
      <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
      /> <br></br>
      <label>Job Title:</label> <br></br>
      <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
      /> <br></br>
    <label>E-Mail:</label> <br></br>
      <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
      /> <br></br>
    <label>Phone Number:</label> <br></br>
      <input
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
      /> <br></br>
    <label>Location:</label> <br></br>
      <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
      /> <br></br>
      </>
    )
  }
  
  export default GeneralInfo;