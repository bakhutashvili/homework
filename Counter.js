import React, { useState } from 'react';
import Button from './Button';

export default function Counter({start, increase}) {

const [number, setNumber] = useState(start || 0);


const increment = () => {
    setNumber(number + (increase || 5));
}


const decrement = () => {
    if(number > 0) {
        setNumber(number - (increase || 5));
    }else{
        setNumber(0);
        alert("You can't go below 0");
    }
}

    
    return(
        <div className="counter">
        <p>{number}</p>
        <Button 
            btnClass="increase" 
            text="increase" 
            onClick={increment}
        />
        <Button 
            btnClass="decrease" 
            text="decrease" 
            onClick={decrement}
        />
        </div>
    )
}