import React, { useState, useRef } from "react";
import _ from "lodash";
import Canvas from "./components/canvas";
import "./App.css";

function App() {
	const [name, setName] = useState("Jan Kowalski");
	const [klasa, setKlasa] = useState("1X");

	const handleName = useRef(
		_.debounce((input) => {
			if (!input) return setName("Jan Kowalski");
			setName(input);
		}, 1000)
	).current;

	const handleKlasa = useRef(
		_.debounce((input) => {
			if (!input) return setKlasa("1X");
			setKlasa(input);
		}, 1000)
	).current;

	return (
		<div className="container">
			<Canvas name={name} klasa={klasa} />
			<input
				placeholder="Imię i Nazwisko"
				onChange={(e) => handleName(e.target.value)}
			/>
			<input
				placeholder="Klasa"
				onChange={(e) => handleKlasa(e.target.value)}
			/>
		</div>
	);
}

export default App;
