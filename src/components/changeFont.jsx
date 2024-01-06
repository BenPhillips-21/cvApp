import React, { useState } from 'react';
import '../styles/resumeStyles.css'

function Font({ font, setFont }) {

    const changeFont = (newFont) => {
        setFont(newFont);
    };

    return (
        <>
        <div className='font-buttons'>
            <button onClick={() => changeFont('serif')}>Serif</button>
            <button onClick={() => changeFont('sans-serif')}>Sans</button>
            <button onClick={() => changeFont('monospace')}>Mono</button>
        </div>
        </>
    )
}

export default Font;
