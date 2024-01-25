import React, { useState } from 'react';
import GeneralInfo from './generalInfo';
import '../styles/resumeStyles.css'

export default function Resume({ location, SetLocation, name, setName, title, setTitle, email, setEmail, number, setNumber, status, setStatus }) {

  return (
    <>
        <div className = 'chungus'>
            <div className='header'>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div> 
                <div className='info'>
                    <p>{email}</p>
                    <p>{number}</p>
                    <p>{location}</p>
            </div>
        </div>
    </>
    );
}
