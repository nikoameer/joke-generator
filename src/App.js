import './App.css';
import { useEffect, useState, useRef } from 'react';
import useRandomJoke from './useRandomJoke';

function App () {
  // Reference for first name 
  const firstNameRef = useRef(null);

  // Reference for last name
  const lastNameRef = useRef(null);

  // Two pieces of state
  const [firstName, setFirstName] = useState('Aku');
  const [lastName, setLastName] = useState('Ankka');

  // Custom Hook
  const joke = useRandomJoke(firstName, lastName);

  // Function generate joke with e as an arguement
  const generateJoke = e => {
    e.preventDefault();
    // Gets the current value inside input and sets first and last name
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2><i>{joke}</i></h2>

      <form>
        {/* onChange trigger a event */}
        <input
          placeholder="first name"
          //Referencing element
          ref={firstNameRef}
        // value={firstName} 
        // onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <input
          placeholder="last name"
          //Referencing element
          ref={lastNameRef}
        // value={lastName} 
        // onChange={(e) => setLastName(e.target.value)} 
        ></input>

        {/* onClick trigger a function*/}
        <button type="submit" onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
