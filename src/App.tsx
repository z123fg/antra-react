import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/Button/Button"
import Slider from './components/Slider/Slider';
function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton>
      <Slider size={'big'} rangeSelector={true} color={'pink'} min={0} max={1000} step={10} mark={30} />
    </div>
  );
}

export default App;
