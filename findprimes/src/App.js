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
    <div className="App" style={{overflow: 'scroll'}}>
      <header className="App-header">
        <h1>Multiplication table of the {N > 1 ? `first ${N} prime numbers`: `first prime number`} 
          <input type="range" min="1" max="100" value={N} onChange={handler} step="1">
          </input>
        </h1>
        <h2>Drag the slider to see larger/smaller tables! Scroll the page as N increases...</h2>
        <div>
        {primeString.split('\n').map((line, index) => {
          return (
            <div key={line} className={index === 0 ? 'odd' : 'even'} style={{display: 'flex', flexDirection: 'row'}}>
              {line.split('-').map((number, index) => {
                return (
                  <div key={number} style={index === 0 ? {minWidth: '80px', backgroundColor: '#00000020'} : {minWidth: '80px'}}>
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
