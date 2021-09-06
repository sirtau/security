import logo from './logo.svg';
import './App.css';
import PinCheck from './PinCheck';
import CreditCardChecker from './CreditCardChecker';
import PasswordChecker from './PasswordChecker';
import StringRepeater from './StringRepeater';
import PWCheckFunction from './PWCheckFunction';

function App() {
  return (
    <div className="App-header">
      <PWCheckFunction />
      <StringRepeater />
      <PinCheck /> 
      <PasswordChecker />
      <CreditCardChecker />
      
    </div>
  );
}

export default App;
