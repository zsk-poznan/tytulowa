import React, { useState } from "react";
import Canvas from "./components/canvas";
import "./App.css";

function App() {
	const [name, setName] = useState("Jan Kowalski");
	const [klasa, setKlasa] = useState("1X");

	const handleName = (e) => {
		if (!e.target.value) return setName("Jan Kowalski");
		setName(e.target.value);
	};

	const handleKlasa = (e) => {
		if (!e.target.value) return setKlasa("1X");
		setKlasa(e.target.value);
	};

	return (
		<>
			<Canvas name={name} klasa={klasa} />
			<input placeholder="Imię i Nazwisko" onChange={handleName} />
			<input placeholder="Klasa" onChange={handleKlasa} />
		</>
	);
}

export default App;
