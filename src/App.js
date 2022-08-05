import { useEffect, useMemo, useState } from 'react';
import Number from './Number';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [inRange, setInRange] = useState(true);

  // useEffect( () => {
  //   checkRange();
  // }, [number])

  const checkRange = () => {
    if (number !== 0 || number > 1000){
      if (!inRange) {
        alert('bummer')
      } else {
        alert('winner')
      }
    }
  }

  // const number = useMemo( () => {
  //   const value = number;
  //   return value;
  // }, [number]);

  // useEffect( () => {
  //     // if ( number > 1000) {
  //     //   setInRange(false);
  //     //   checkRange();
  //     // }


  // }, [ number, inRange ]);

  // useEffect(() => {
  //   if (!inRange) {
  //     alert('you lose');
  //     setInRange(true);
  //     setNumber(0);
  //   }
  // }, [inRange])

  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    let i = 0;
    let timer;
    while( i < 400){
      const spinningNumbers = getNumbers();
      for ( let i = 0; i < spinningNumbers.length; i++){
        timer = setTimeout(() => setNumber(spinningNumbers[i]), 10);
      }
      i++;
    } 
    return () => clearTimeout(timer);
  }

  const getNumbers = () => {
    let numberArr = [];
    let i = 0;
    while(i < 50) {
      const number = getRandomNumber(1, 75000);
      numberArr.push(number);
      i++;
    }
    return numberArr;
  }


  console.log(number);
  // console.log(data);

    return (
      <div className="App">
        <h1>The JavaScript Lottery</h1>
        <h2>Click the button to draw a number</h2>
        <button onClick={handleClick}>Let's Play</button> 
        <h3>Your Number: {number}</h3>
        {/* <Number number={number} inRange={inRange}/> */}
        <p>* Any number in the 1 to 1000 range wins!</p>
      </div>
    );
}

export default App;
