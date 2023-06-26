import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/Button/Button';
import MyPagination from './components/Pagination/MyPagination';
import Pagination from '@mui/material/Pagination';

function App() {
  return (
    <div className="App">
      {/* <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton> */}
      <MyPagination count={20} color="secondary" shape="rounded" />
      <Pagination count={20} color="secondary" shape="rounded" />
    </div>
  );
}

export default App;
