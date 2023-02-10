import React, { useState } from 'react';
import './App.css';

function computeInitialCount() {
  const initialCount = Math.round(Math.random() * 100);
  console.log(`initian couin is ${initialCount}`);
  
  return initialCount;
}

function App() {
  // const defCount: number = 0
  // const [ count, setCount ] = useState(defCount);

  const defCount: number = 0
  const [ count, setCount ] = useState(() => computeInitialCount());

  function increment() {
    console.log('increase by 1')
    setCount(count + 1);
  }

  function decrement() {
    console.log('decrease by 1')
    setCount(count - 1);
  }

  function reset() {
    console.log('reset to zero')
    setCount(defCount);
  }

  function async() {
    setCount((prev: number): number => {
      console.log('async increace by 1');
      return prev + 1;
    });

    setCount((prev: number): number => {
      console.log('async increace by 1');
      return prev + 1;
    });
  }

  return (
    <div className="App">
      <div className="App__counter">
        <div className="App__counter--count">
          { count }
        </div>

        <div className="App__counter--buttons-blok">
          <button className='App_couner--button button-primary' onClick = { increment }>Add</button>
          <button className='App_couner--button button-danger' onClick = { decrement }>Sub</button>
          <button className='App_couner--button button-reset' onClick = { reset }>Res</button>
          <button className='App_couner--button button-async' onClick = { async }>Async</button>
        </div>
      </div>
    </div>
  );
}

export default App;
