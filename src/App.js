import logo from './logo.svg';
import './App.css';
import { useState } from "react";




function App() {

  const [temperature, setTemperature] = useState("0");
  
  return (
    <div className="App">
      <h1>SF Weather</h1>
      <h3>Temperature</h3>
      <h2 id='temp'> {temperature} </h2>
      <h3>random comment in future</h3>

    </div>
  );
}

export default App;
