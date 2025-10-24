import './App.css';
import CounterComponent from './ex1/CounterComponent';
import LightSwitch from './ex1/LightSwitch';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CounterComponent />
        <LightSwitch />
      </div>
    </ThemeProvider>
  );
}

export default App;
