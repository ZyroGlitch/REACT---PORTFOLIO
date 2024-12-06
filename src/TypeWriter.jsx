import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
    const phrases = [
        "Fullstack Web Developer",
        "Laravel Developer",
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0); // To keep track of the current phrase
    const [phraseIndex, setPhraseIndex] = useState(0); // To keep track of the current phrase in the array

    useEffect(() => {
        let typingTimeout;

        // Handle typing effect for the current phrase
        if (index < phrases[phraseIndex].length) {
            typingTimeout = setTimeout(() => {
                setDisplayedText(displayedText + phrases[phraseIndex][index]);
                setIndex(index + 1);
            }, 100); // Speed of typing
        } else {
            // Once the phrase is fully typed, wait for 5 seconds before switching to the next phrase
            setTimeout(() => {
                setPhraseIndex((prev) => (prev + 1) % phrases.length); // Loop through the phrases
                setIndex(0); // Reset the index to start typing the next phrase
                setDisplayedText(""); // Clear the text to start typing the next phrase
            }, 5000); // 5 seconds delay before switching phrases
        }

        return () => clearTimeout(typingTimeout);
    }, [index, displayedText, phrases, phraseIndex]);

    return (
        <div>
            <p className="text-[1rem] font-bold">Aspiring {displayedText}</p>
        </div>
    );
};

export default TypewriterEffect;
