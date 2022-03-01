import React from 'react';

export default function Button({btnClass, text, onClick}) {
    return(
        <button 
            onClick={onClick}
            className={`${btnClass ? btnClass : ""}`}
        >
            {text}
        </button>
    )
}