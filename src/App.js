import logo from './logo.svg';
import './App.css';
import PinCheck from './PinCheck';
import CreditCardChecker from './CreditCardChecker';
import PasswordChecker from './PasswordChecker';

function App() {
  return (
    <div className="App-header">

      <PinCheck />
       <PasswordChecker />
       <CreditCardChecker />
    </div>
  );
}

export default App;
