import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/Button/Button"
function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton>
    </div>
  );
}

export default App;
