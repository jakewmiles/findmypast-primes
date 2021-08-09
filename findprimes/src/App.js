import { useState, useEffect } from 'react';
import { generatePrimeString, firstNPrimes } from './helperFunctions';

function App() {
  const [N, setN] = useState(1);
  const [primeString, setPrimeString] = useState('');
  const handler = (e) => {
    setN(e.target.value);
  }

  useEffect(() => {
    setPrimeString(generatePrimeString(firstNPrimes(N)));
  }, [N]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplication table of the {N > 1 ? `first ${N} prime numbers`: `first prime number`} 
          <input type="range" min="1" max="100" value={N} onChange={handler} step="1">
          </input>
        </h1>
        <h2>Drag the slider to see larger/smaller tables! Scroll the page as N increases...</h2>
        <div>
        {primeString.split('\n').map((line, index) => {
          return (
            <div key={line}>
              {line.split('-').map((number, index) => {
                return (
                  <div key={number}>
                    {number}
                  </div>
                )
              })}
            </div>)
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
