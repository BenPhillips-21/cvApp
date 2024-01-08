import React, { useState } from 'react';
import '../styles/resumeStyles.css'

function Font({ font, setFont }) {

    const changeFont = (newFont) => {
        setFont(newFont);
    };

    return (
        <>
        <div className='font-buttons'>
            <button style={{ fontWeight: 'bold' }} onClick={() => changeFont('serif')}>Serif</button>
            <button style={{ fontWeight: 'bold' }} onClick={() => changeFont('sans-serif')}>Sans</button>
            <button style={{ fontWeight: 'bold' }} onClick={() => changeFont('monospace')}>Mono</button>
        </div>
        </>
    )
}

export default Font;
