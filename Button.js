import React from "react";

export default function Button({buttonClass, text, onClick}) {
    return(
        <button className={`${buttonClass ? buttonClass : ""}`} onClick={onClick}>
                    {text}
        </button>
    )
}