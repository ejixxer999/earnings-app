import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import EarningStatements from './earningstatements';


function App() {
  const [symbol, setSymbol] = useState('AAPL')
 
    return (
      <div>
      <h1>Retail Earnings Dashboard</h1>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter company symbol"
      />
      <EarningStatements symbol={symbol} />
     
    </div>
  );
}

export default App;
