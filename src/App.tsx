import React from 'react';
import CustomSelect, {Option} from './components/Select/Select';
import './App.css';
import MyButton from "./components/Button/Button"
function App() {
  const options: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleChange = (values: string[]) => {
    values.forEach(value => {
        console.log(`Selected value: ${value}`);
    });
};

  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">submit</MyButton>
      <CustomSelect options={options} color="primary" onChange={handleChange} open={true} multiSelect={true}/>
    </div>
  );
}

export default App;
