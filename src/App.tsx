import React from "react";
import "./App.css";
import MyButton from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <MyButton>Submit</MyButton>
      <MyButton variant="outlined" color="secondary" size="small">
        submit
      </MyButton>
      <MyButton size="small" isLoading>
        Loading
      </MyButton>
    </div>
  );
}

export default App;
