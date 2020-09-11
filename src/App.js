import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";
import "./App.css";

function App() {
	const [name, setName] = useState("Jan Kowalski");
	const [klasa, setKlasa] = useState("1X");

	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		let logo = new Image();
		logo.src = "/tytulowa/logo.png";

		canvas.width = 800;
		canvas.height = 500;

		ctx.fillStyle = "#ca4b4b";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = "#9c2b2b";
		ctx.fillRect(0, ctx.canvas.height - 100, ctx.canvas.width, 100);

		logo.onload = () => {
			ctx.drawImage(logo, 55, ctx.canvas.height - 150, 100, 100);
		};

		ctx.fillStyle = "#ffffff";

		ctx.font = "700 36px Montserrat";
		ctx.fillText("Zespół Szkół Komunikacji", 175, ctx.canvas.height - 110);

		ctx.font = "400 24px Montserrat";
		ctx.fillText(
			"im. Hipolita Cegielskiego w Poznaniu",
			175,
			ctx.canvas.height - 75
		);

		ctx.textAlign = "center";

		ctx.font = "700 48px Montserrat";
		ctx.fillText("Geografia", ctx.canvas.width / 2, 100);

		ctx.font = "700 32px Montserrat";
		ctx.fillText("Technikum Komunikacji", ctx.canvas.width / 2, 150);

		ctx.font = "400 42px Montserrat";
		ctx.fillText(name, ctx.canvas.width / 2, 250);

		ctx.font = "400 30px Montserrat";
		ctx.fillText(`Klasa ${klasa}`, ctx.canvas.width / 2, 285);

		const ratio =
			window.screen.availWidth > 800
				? 1
				: window.screen.availWidth / canvas.width;

		canvas.style.width = canvas.width * ratio + "px";
		canvas.style.height = canvas.height * ratio + "px";
	}, [name, klasa]);

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
