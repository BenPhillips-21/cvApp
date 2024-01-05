import React, { useState } from 'react';
import GeneralInfo from './generalInfo';
import '../styles/resumeStyles.css'

export default function Resume({ works, jobLocation, business, jobTitle, responsibilities, startWorkDate, endWorkDate, workStatus, location, name, title, email, number, educations, school, degree, schoolLocation, startDate, endDate }) {
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
    <div className='education-container'>
        <div className='education-heading'>
            <h1>Education</h1>
        </div>
        {educations.map((education, index) => (
            <div key={index} className='education-info'>
            <div className='education-info-group'>
                <div className='dates-container'>
                    <p>{education.startDate} - {education.endDate}</p>
                </div>
                <p>{education.schoolLocation}</p>
            </div>
            <div className='education-info-group'>
                <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '-8px', marginTop: '16px' }}>{education.school}</p>
                <p>{education.degree}</p>
            </div>
            </div>
        ))}
        <div className='education-info'>
            <div className='education-info-group'>
            <div className='dates-container'>
                <p>{startDate}{endDate}</p>
            </div>
            <p>{schoolLocation}</p>
            </div>
            <div className='education-info-group'>
            <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '-8px', marginTop: '16px' }}>{school}</p>
            <p>{degree}</p>
            </div>
        </div>
        </div>

        <div className='education-container'>
        <div className='education-heading'>
            <h1>Professional Experience</h1>
        </div>
        {works.map((work, index) => (
            <div key={index} className='education-info'>
                <div className='education-info-group'>
                    <div className='dates-container'>
                        <p>{work.startWorkDate} - {work.endWorkDate}</p>
                    </div>
                    <p style={{ marginTop: '16px' }}>{work.jobLocation}</p>
                </div>
                <div className='education-info-group'>
                    <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '-8px', marginTop: '16px' }}>{work.business}</p>
                    <p>{work.jobTitle}</p>
                    <p>{work.responsibilities}</p>
                </div>
            </div>
        ))}
    <div className="education-info">
    <div className='education-info-group'>
         <div className='dates-container'>
        <p>{startWorkDate}{endWorkDate}</p>
         </div>
         <p style={{ marginTop: '16px' }}>{jobLocation}</p>
        </div>
        <div className='education-info-group'>
        <p style={{ fontSize: '24px', fontWeight: '700', marginBottom: '-8px', marginTop: '16px' }}>{business}</p>
        <p>{jobTitle}</p>
        <p>{responsibilities}</p>
        </div>
    </div>
    </div>
    </>
    );
}

