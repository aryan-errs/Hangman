import {React, useEffect} from 'react'
import { checkWin } from '../Helpers/Helpers';

function Popup({correctLetters, wrongLetters, selectedWord, setPlayabel}){
    let finalMessage = '';
    let finalMsgRevealWord = '';
    let playable = true;

    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congratulations! You won! 😃';
        playable = false;
    } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'Dead Xd. You lost. 😕';
        finalMsgRevealWord = `...the word was: ${selectedWord}`;
        playable = false;
    }
    useEffect (() => setPlayabel(playable));
    return(
        <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMsgRevealWord}</h3>
                <button onClick={() => window.location.reload()}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup