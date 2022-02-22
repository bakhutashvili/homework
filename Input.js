import React, { useState } from "react";
import Button from "./Button";

export default function Input() {

    const [name, setName] = useState("");


function inputClick(){
    alert(`Hello - ${name}`);
}


    return(
        <form>
            <label>
               Name:
                <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                       
                />
                <br/>
                <Button
                        buttonClass="btn1" 
                        text="Click" 
                        onClick={inputClick} 
                 />
            </label>
        </form>
    )
}