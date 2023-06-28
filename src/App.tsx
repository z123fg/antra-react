import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/Button/Button";
import Switch from "./components/Switch/Switch";
function App() {
	return (
		<div className="App">
			<MyButton>Submit</MyButton>
			<MyButton variant="outlined" color="secondary" size="small">
				submit
			</MyButton>
			<Switch
				labelContext={"Switch"}
				defaultChecked={true}
				color="primary"
				size="small"
			/>
			<Switch
				labelContext={"Switch"}
				color="secondary"
				size="medium"
				callbackFns={[
					() => {
						alert("hi");
					},
				]}
			/>
			<Switch color="default" size="medium" />
		</div>
	);
}

export default App;
