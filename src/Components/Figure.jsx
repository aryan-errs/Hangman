import React from "react";

function Figure({wrongLetters}) {
    const errorCount = wrongLetters.length;
    return (
        <svg height="250" width="400" className="figure-container">
            // Rod
            <line x1="60" y1="20" x2="140" y2="20" className="rod-part"/>
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" className="rod-part" />
            <line x1="20" y1="221" x2="100" y2="221" className="pedestal" />
            <line x1="0" y1="230" x2="500" y2="230" className="bottom-rod" />

            // head
            {errorCount > 0 && <circle cx="140" cy="70" r="20"  className="head" />}
            // Body
            {errorCount > 1 && <line x1="140" y1="90" x2="140" y2="150"  />}
            // Arms
            {errorCount > 2 && <line x1="140" y1="120" x2="120" y2="100"  />}
            {errorCount > 3 && <line x1="140" y1="120" x2="160" y2="100"  />}
            // Legs
            {errorCount > 4 && <line x1="140" y1="150" x2="120" y2="180"  />}
            {errorCount > 5 && <line x1="140" y1="150" x2="160" y2="180"   />}
        </svg>
        
    )
}

export default Figure;
