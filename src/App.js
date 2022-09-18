import React, { useState, useRef } from "react";
import _ from "lodash";
import useCanvas from "./hooks/useCanvas";
import "./App.css";

function App() {
  const [subject, setSubject] = useState("geo");
  const [name, setName] = useState("Jan Kowalski");
  const [klasa, setKlasa] = useState("1X");

  const canvasRef = useRef(null);

  useCanvas(canvasRef, name, klasa, subject);

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
    <>
      <div className="container">
        <div className="subjectChange">
          <button onClick={() => setSubject("geo")}>Geografia</button>
          <button onClick={() => setSubject("dg")}>
            Działalność gospodarcza
          </button>
        </div>

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
      <footer>
        <a href="https://github.com/zsk-poznan/tytulowa">
          <img alt="GitHub Source Code" src="https://i.imgur.com/3PbBdr2.png" />
        </a>
        <br />
        Made by <a href="https://ejer.ga">ejer</a>
      </footer>
    </>
  );
}

export default App;
