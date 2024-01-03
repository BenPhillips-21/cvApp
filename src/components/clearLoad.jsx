import React, { useState } from 'react';

function ClearLoad({ works, setWorks, business, setBusiness, jobTitle, setJobTitle, responsibilities, setResponsibilities, startWorkDate, setStartWorkDate, endWorkDate, setEndWorkDate, workStatus, setWorkStatus, state, setState, location, setLocation, name, setName, title, setTitle, email, setEmail, number, setNumber, status, setStatus, educations, setEducations, school, setSchool, degree, setDegree, schoolLocation, setSchoolLocation, startDate, setStartDate, endDate, setEndDate }) {
    function handleClear() {
        setWorks([]);
        setBusiness('');
        setJobTitle('');
        setResponsibilities('');
        setStartWorkDate('');
        setEndWorkDate('');
        setWorkStatus(0);
        setState(0); // replace with the initial value for state
        setLocation(''); // replace with the initial value for location
        setName('');
        setTitle('');
        setEmail('');
        setNumber('');
        setStatus(false);
        setEducations([]); // replace with the initial value for educations
        setSchool('');
        setDegree('');
        setSchoolLocation('');
        setStartDate('');
        setEndDate(''); 
    }

    function handleLoad() {
        handleClear()

        setBusiness('DeployPartners');
        setJobTitle('Software Development Intern');
        setResponsibilities('Developed a React-based dashboard application.');
        setStartWorkDate('Sep 2023');
        setEndWorkDate('Dec 2023');
        setWorkStatus(1); 
        setState(1);

        setLocation('Melbourne, Australia');
        setName('Benjamin Phillips');
        setTitle('Junior Software Developer');
        setEmail('pben012@gmail.com');
        setNumber('0480 494 579');
        setStatus(false);
     
        setSchool('Coder Academy');
        setDegree('Full Stack Web Development Course');
        setSchoolLocation('Melbourne');
        setStartDate('Mar 2023');
        setEndDate('Sep 2023');
    }
    
    
    return (
        <>
            <button onClick={handleClear}>Clear Resume</button>
            <button onClick={handleLoad}>Load Example</button>
        </>
    )
}

export default ClearLoad