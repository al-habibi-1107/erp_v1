
import './App.css';
import ClientComponent from './components/client_component';
import ClosingComponent from './components/closing_component';
import Header from './components/header';
import StockComponent from './components/stock_component';
import React, {  useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    event.persist();
    setInputValue(event.target.value);
    console.log('Input value:', inputValue);
  };


  return (
    <div className="App">
      <Header></Header>
      <label>Auth Key</label>
      <input value={inputValue} onChange={handleInputChange}></input>
      <StockComponent auth={inputValue}></StockComponent>
      <ClosingComponent auth={inputValue}></ClosingComponent>
      <ClientComponent auth={inputValue}></ClientComponent>
    </div>
  );
}

export default App;
