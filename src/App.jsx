import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import Figure from "./Components/Figure";
import WrongLetters from "./Components/WrongLetters";
import Notif from "./Components/Notif";
import Popup from "./Components/Popup";

import Word from "./Components/Word";
import axios from "axios";
import {showNotification as show} from "./Helpers/Helpers";





function App() {

  const [words, setWords] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  // const renderAfterCalled = useRef(false);
  const[showNotification, setshowNotification] = useState(false);

  useEffect(() => {
      axios.get("https://random-words-api.vercel.app/word/noun")
        .then(res => {
          setWords(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      }, []);
  // location.reload();
  let selectedWord = String(words[0]?.word).toLowerCase();

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setshowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else { 
            show(setshowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  



  return (
    <>
      <div className="heading">
        <Header />
      </div>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters  wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayabel={setPlayable}/>
      <Notif showNotification={showNotification}/>
    </>
  );
}

export default App;
