import React, { useState } from 'react';

function Customize({page, setPage}) {

    function handleContent() {
        setPage('content')
    }

    function handleCustomize() {
        setPage('customize')
    }

    return (
        <>
            <div className="custom-buttons">
                <button onClick={handleContent}>Content</button>
                <button onClick={handleCustomize}>Customize</button>
            </div>
        </>
    )
}

export default Customize;