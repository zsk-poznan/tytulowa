import React, { useState, useRef } from "react";
import _ from "lodash";
import useCanvas from "./hooks/useCanvas";
import "./App.css";

function App() {
	const [name, setName] = useState("Jan Kowalski");
	const [klasa, setKlasa] = useState("1X");

	const canvasRef = useRef(null);

	useCanvas(canvasRef, name, klasa);

	const save = (e) => {
		const img = canvasRef.current.toDataURL("image/png");

		e.target.href = img;
	};

	const handleName = useRef(
		_.debounce((input) => {
			if (!input) return setName("Jan Kowalski");
			setName(input);
		}, 500)
	).current;

	const handleKlasa = useRef(
		_.debounce((input) => {
			if (!input) return setKlasa("1X");
			setKlasa(input);
		}, 500)
	).current;

	return (
		<div className="container">
			<canvas ref={canvasRef} />
			<input
				placeholder="Imię i Nazwisko"
				onChange={(e) => handleName(e.target.value)}
			/>
			<input
				placeholder="Klasa"
				onChange={(e) => handleKlasa(e.target.value)}
			/>
			<a
				href="/tytulowa"
				onClick={save}
				download={`${name
					.toLowerCase()
					.replace(/ /g, "-")}-${klasa.toLowerCase()}.png`}
			>
				Zapisz
			</a>
		</div>
	);
}

export default App;
