import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/Button/Button"
import Checkbox from './components/Checkbox/Checkbox';
function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton>
      <Checkbox label='text1' size='small' color='primary'/>
      <Checkbox label='text2' size='medium' color='secondary'/>
    </div>
  );
}

export default App;
