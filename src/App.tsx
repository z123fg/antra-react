import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button/Button';
import Pagination from './components/Pagination/Pagination';
function App() {
  return (
    <div className="App">
      {/* <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton> */}
      <Pagination />
    </div>
  );
}

export default App;
