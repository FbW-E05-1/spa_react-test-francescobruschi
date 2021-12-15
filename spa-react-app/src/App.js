import React,{useState} from 'react';
import Info from "./Info";
import './App.css';


function App() {
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div
        className="box"
        style={{
          transform: `translateY(${offsetTop}px)`
        }}
      />

      <Info />
    </div>
  );
}

export default App;
