import './App.css';
import OtpInput from './components/OtpInput';

function App() {
  return (
    <div className="App">
      <h2>React machine coding</h2>
      <OtpInput otpCharCount={10} />
    </div>
  );
}

export default App;
