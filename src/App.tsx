import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import MyButton from "./components/Button/Button"
function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton>
      <Accordion
        summary="What is React?"
        details="React is a front end JavaScript framework"
        expandIcon="+"
      />
    </div>
  );
}

export default App;
