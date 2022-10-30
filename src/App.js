import './App.css';
import React, { useState } from "react";

export default function App() {
  
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const newInput = {
    inputValue: input
  }


  const filtered = list.filter((values) => {
    return values.inputValue.toLowerCase().includes(input.toLowerCase())
  }) 

const handleSubmit = (e) => {
    e.preventDefault()

    if (!input) {
      setError("Cannot be empty. Please type in a word!")
    } else if (!input.match(/^[a-zA-Z]+$/)) {
      setError("Cannot have numbers or symbols. Only letters!")
    } else {
      setList([...list, newInput])
    }

    setInput("")

}

const handleChange = (e) => {
  setInput(e.target.value)
  setError("")
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
              onChange={handleChange}
              />

          </form>

              <h3>{error}</h3>

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


