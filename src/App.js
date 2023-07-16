
import './App.css';
import ClientComponent from './components/client_component';
import ClosingComponent from './components/closing_component';
import Header from './components/header';
import StockComponent from './components/stock_component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <StockComponent></StockComponent>
      <ClosingComponent></ClosingComponent>
      <ClientComponent></ClientComponent>
    </div>
  );
}

export default App;
