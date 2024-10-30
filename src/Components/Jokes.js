import React from "react";
import { useState } from "react";

export default function Jokes({setup, punchline}) {

    const [showPunchline, setShowPunchline] = useState(false);

    const handleClick = () => {
        setShowPunchline(prev => !prev);
    };

    return (
        <>
         <div className="jokes-container">
            <p>{setup}</p>
            <button onClick={handleClick}>{showPunchline ? "Hide punchline" : "Reveal punchline"}</button>
            <p className="punchline" style={{visibility: showPunchline ? "visible" : "hidden"}}>{punchline}</p>
         </div>
        </>
    )
};