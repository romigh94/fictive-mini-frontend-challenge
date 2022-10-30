import './App.css';
import React, { useState } from "react";

export default function App() {
  
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const newInput = {
    inputValue: input
  }


  const filtered = list.filter((values) => {
    return values.inputValue.toLowerCase().includes(input.toLowerCase())
  }) 

const handleSubmit = (e) => {
    e.preventDefault()

    setList([...list, newInput])
    setInput("")
}

const handleClear = () => {
    setList([])
}


  return (

    <div>
        <div className="list">
          <form onSubmit={handleSubmit}>

              <input type="text" 
              className="input" 
              placeholder="Enter & filtrate words..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              />

          </form>

            <button onClick={handleClear}>Clear</button>

            {filtered.map((result, index) => {

                let startString = result.inputValue.substr(0,
                  result.inputValue.toLowerCase().indexOf(input.toLowerCase())
                );

                let highlight = result.inputValue.substr(
                  result.inputValue.toLowerCase().indexOf(input.toLowerCase()),
                  input.length
                );

                let endString = result.inputValue.substr(
                  result.inputValue.toLowerCase().indexOf(input.toLowerCase()) +
                  input.length
                );

              return (  
                <div key={index}>
                  <li className="box">
                      {startString}
                        <strong>
                          {highlight}
                        </strong>
                      {endString}
                  </li>
                </div>
              )
            })}
      </div>
</div>

  );
}


