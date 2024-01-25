import React, { useState } from 'react';
import GeneralInfo from './generalInfo';
import '../styles/resumeStyles.css'

export default function Resume({ location, name, title, email, number, educations, school, degree, schoolLocation, startDate, endDate }) {

  return (
    <>
    <div>
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
    </div>
    <div className = 'education-container'>
        <h1>Education</h1>
            <p>{school}</p>
            <p>{degree}</p>
            <p>{schoolLocation}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
    </div>
    {/* <div className = 'workhistory-container'>
        <h1>Professional Experience</h1>
    </div> */}
    </>
    );
}
