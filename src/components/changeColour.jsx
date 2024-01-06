import React, { useState } from 'react';
function Colour({colour, setColour}) {

    function handleColourChange(event) {
        setColour(event.target.value)
    }

    return (
        <>
            <input type="color" value={colour} onChange={handleColourChange} />
        </>
    )
}

export default Colour;