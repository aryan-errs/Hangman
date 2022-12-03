import React from "react";
import hangman from "../Assets/hangman-icon.png";

export default function Header(){
    return (
        <>
            <div className="header">
                <div className="top-line">
                    <h1>Hangman</h1>
                    <img src={hangman} alt="hangman icon" />
                </div>
                <p>Find the hidden word</p>
            </div>
        </>
    )
}