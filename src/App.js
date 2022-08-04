import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNumber(getRandomNumber(1, 75000));
  }

  return (
    <div className="App">
      <h1>The JavaScript Lottery</h1>
      <h2>Click the button to draw a number</h2>
      <button onClick={handleClick}>Let's Play</button>
      <h3>Your Number: {number}</h3>
      <p>* Any number in the 1 to 1000 range wins!</p>
    </div>
  );
}

export default App;
