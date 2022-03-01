import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {

const [inputValue,setInputValue] = useState(0);
const [startValue,setStartValue] = useState();



  return (
    <div className="App">

      <input 
          type="text" 
          placeholder="Type number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
      />
      <Button 
          text={"Change number"}
          onClick={() => {
            setStartValue(parseInt(inputValue))
          }}
      />
      {
        startValue && <Counter start={startValue} increase={1}/>
      }
      <Counter  />
      <Counter start={500}  increase={100}/>
    </div>
  );
}

export default App;
