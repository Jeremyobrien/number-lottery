import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);

/*listens for change in 'number' and delays
alert window until final 'number' from spinNumbers()
is returned */
  useEffect( () => {
    let timer = setTimeout( () => {
      if (number > 1000){
        alert("Too bad! You've lost!");
        setNumber(0);
        setIsActive(false);
      }
    }, 250)
    return () => clearTimeout(timer);
    }, [number]);


  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getNumbersArray = () => {
    let numberArr = [];
    let i = 0;
    while(i < 50) {
      const number = getRandomNumber(1, 100000);
      numberArr.push(number);
      i++;
    }
    return numberArr;
  }

/*Iterates over a lot of arrays and sets 'number' a bunch
 to give illusion of spinning numbers*/
  const spinNumbers = () => {
    let i = 0;
    let timer;
    while( i < 400){
      let spinningNumbers = getNumbersArray();
      for ( let i = 0; i < spinningNumbers.length; i++){
        timer = setTimeout(() => setNumber(spinningNumbers[i]), 10);
      }
      i++;
    } 
    return () => clearTimeout(timer);
  }

// Changes button color, builds anticipation with setTimeout
  const handleClick = () => {
     setIsActive(true);
     let timer = setTimeout(() => spinNumbers(), 300);
     return () => clearTimeout(timer);
  }

    return (
      <div className="App">
        <h1>The JavaScript Lottery</h1>
        <h2>Click the button to draw a number</h2>
        <button 
          style={{
            fontSize: "18px",
            backgroundColor: isActive ? "#61dafb" : "#D3D3D3",
            border: isActive ? "solid 2px #86C5D8" : "solid 2px #899499",
            width: "200px",
            height: "100px",
          }} 
          onClick={handleClick}
        >Let's Play
        </button> 
        <h3>Your Number: {number}</h3>
        <p>* Any number in the 1 to 1000 range wins!</p>
      </div>
    );
}

export default App;
