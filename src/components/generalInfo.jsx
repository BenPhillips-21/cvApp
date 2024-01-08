import React, { useState } from 'react';
function GeneralInfo({ location, setLocation, name, setName, title, setTitle, email, setEmail, number, setNumber, status, setStatus }) {
  const [open, setOpen] = useState('open')  
  
  function handleSave() {
      open === 'open' ? setOpen('close') : setOpen('open')
    }
    
    if (open === 'open') {
    return (
<>
  <h2>General Information:</h2>
  <label>Name:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={name}
    onChange={(event) => setName(event.target.value)}
  />
  <br />

  <label>Job Title:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
  />
  <br />

  <label>E-Mail:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
  />
  <br />

  <label>Phone Number:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={number}
    onChange={(event) => setNumber(event.target.value)}
  />
  <br />

  <label>Location:</label> <br />
  <textarea
    rows="1"
    cols="30"
    value={location}
    onChange={(event) => setLocation(event.target.value)}
  />
  <br />

  <button style={{ fontWeight: 'bold' }} onClick={handleSave}>Save</button>
</>

    )
    }
    else {
      return (
        <>
          <button style={{ fontWeight: 'bold' }} onClick={handleSave}>Edit Personal Information</button>
        </>
      )
    }
  }
  
  export default GeneralInfo;