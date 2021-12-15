import React,{useState} from 'react';
import Info from "./Info";
import './App.css';


function App() {
 const [name,setName] = useState ('Frankie');
 const [age,setAge] = useState (36);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age} </p>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input className="input" type="text" placeholder="William" value={name} onChange={event => setName(event.target.value)} />
        </div>

        
        <div className="field">
          <label className="label">Age: </label>
          <input className="input" type="number" placeholder="38" value={age} onChange={event => setAge(+event.target.value)}/>
        </div>
      </div>
      <Info seriesNumber="3" />
    </div>
  );
}

export default App;
