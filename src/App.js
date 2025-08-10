import './App.css';
import OtpInput from './components/OtpInput';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <h2>React machine coding</h2>
      <OtpInput otpCharCount={10} />
      <ProgressBar progress={48} />
    </div>
  );
}

export default App;
