// TypingAnimation 1.

/*
import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
    const textArray = [
        'MERN Stack Developer',
        'Nextjs Developer',
        'React Developer',
        'React Native Developer'
    ];
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            const currentIndex = textIndex % textArray.length;
            const currentTextToType = textArray[currentIndex];
            const slicedText = currentTextToType.slice(0, currentText.length + 1);

            setCurrentText(slicedText);

            if (currentText === currentTextToType) {
                // Pause before deleting text
                setTimeout(() => {
                    setTextIndex(textIndex + 1);
                }, 1000);
            } else if (currentText === '') {
                // Pause before typing next text
                setTimeout(() => {
                    setTextIndex(textIndex + 1);
                }, 500);
            }
        }, 150);

        return () => clearTimeout(typingTimer);
    }, [currentText, textIndex]);

    return (
        <h1>
            {currentText}
            <span className="typing-cursor" />
        </h1>
    );
};

export default TypingEffect;
*/






// TypingAnimation 2 with style.

/*
import React, { useState, useEffect } from 'react';

<style>
// TypingAnimation
.typing-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.typing-container h1 {
    font-size: 36px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    color: #ffffff;
    overflow: hidden;
    // Ensures the text gets cut off when typing
    white-space: nowrap;
    //  Keeps the text in one line
    border-right: 3px solid #333;
    // Adds a cursor effect with a border
    animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
}
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
@keyframes blink-caret {
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: #333;
    }
}
</style>



const texts = [
    'MERN Stack Developer',
    'Nextjs Developer',
    'React Developer',
    'React Native Developer'
];

const TypingAnimation = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [typingCompleted, setTypingCompleted] = useState(false);

    useEffect(() => {
        if (typingCompleted) {
            return;
        }

        const interval = setInterval(() => {
            if (currentText === texts[textIndex]) {
                setTypingCompleted(true);
                clearInterval(interval);
                setTimeout(() => {
                    setTypingCompleted(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }, 2000);
            } else {
                const nextText = texts[textIndex].substring(0, currentText.length + 1);
                setCurrentText(nextText);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [currentText, textIndex, typingCompleted]);

    return (
        <div className="typing-container">
        <h1>{currentText}</h1>
        </div>
        );
    };

export default TypingAnimation;

*/



// TypingAnimation 3.
// Perfectly Work But no repeat.

/*
import React, { useState, useEffect } from 'react';

const AnimatedTyping = () => {
    const [text, setText] = useState('');
    const words = ['React Developer', 'Mern Stack Developer', 'App Developer'];
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)
    const delayBetweenWords = 1000; // Adjust delay between words (in milliseconds)

    useEffect(() => {
        let isMounted = true;
        let currentIndex = 0;
        let currentText = '';

        const type = () => {
            if (isMounted) {
                if (currentIndex >= words.length) {
                    // Animation complete
                    return;
                }

                if (currentText === words[currentIndex]) {
                    // Word typed completely, delete next
                    setTimeout(() => {
                        deleteText();
                    }, delayBetweenWords);
                } else if (currentText.length < words[currentIndex].length) {
                    // Typing
                    currentText = words[currentIndex].substring(0, currentText.length + 1);
                    setText(currentText);
                    setTimeout(type, typingSpeed);
                } else {
                    // Deleting
                    setTimeout(type, typingSpeed);
                }
            }
        };

        const deleteText = () => {
            if (isMounted) {
                if (currentText.length === 0) {
                    // Word deleted completely, move to the next
                    currentIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    // Deleting
                    currentText = currentText.substring(0, currentText.length - 1);
                    setText(currentText);
                    setTimeout(deleteText, typingSpeed / 2);
                }
            }
        };

        setTimeout(type, typingSpeed);

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <h1>
            {text}
            <span className="cursor">|</span>
        </h1>
    );
};

export default AnimatedTyping;

*/













// TypingAnimation 4.
// Perfectly Work But overWrite.
/*
import React, { useState, useEffect, useRef } from 'react';

const AnimatedTyping = () => {
    const [text, setText] = useState('');
    const words = ['React Developer', 'Mern Stack Developer', 'App Developer'];
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)
    const delayBetweenWords = 1000; // Adjust delay between words (in milliseconds)
    const currentIndexRef = useRef(0);
    const isDeletingRef = useRef(false);

    useEffect(() => {
        let timer;

        const type = () => {
            const currentWord = words[currentIndexRef.current];
            const isWordDeleting = isDeletingRef.current;

            setText((prevText) => {
                if (isWordDeleting) {
                    return currentWord.substring(0, prevText.length - 1);
                } else {
                    return currentWord.substring(0, prevText.length + 1);
                }
            });

            if (
                (isWordDeleting && text === '') ||
                (!isWordDeleting && text === currentWord)
            ) {
                isDeletingRef.current = !isDeletingRef.current;
                timer = setTimeout(type, delayBetweenWords);
            } else {
                timer = setTimeout(type, typingSpeed);
            }
        };

        timer = setTimeout(type, typingSpeed);

        return () => clearTimeout(timer);
    }, [text]);

    useEffect(() => {
        const repeatAnimation = () => {
            currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
        };

        const repeatInterval = setInterval(repeatAnimation, words.length * typingSpeed + delayBetweenWords);

        return () => clearInterval(repeatInterval);
    }, []);

    return (
        <h1>
            {text}
            <span className="cursor">|</span>
        </h1>
    );
};

export default AnimatedTyping;
*/








// TypingAnimation 5.

// Master class AnimatedTyping

import React, { useState, useEffect, useRef } from 'react';

const AnimatedTyping = () => {
    const [text, setText] = useState('');
    const words = ['React Developer', 'Mern Stack Developer', 'App Developer'];
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)
    const delayBetweenWords = 1000; // Adjust delay between words (in milliseconds)
    const currentIndexRef = useRef(0);
    const isDeletingRef = useRef(false);

    useEffect(() => {
        let timer;

        const type = () => {
            const currentWord = words[currentIndexRef.current];
            const isWordDeleting = isDeletingRef.current;

            if (!isWordDeleting && text === currentWord) {
                isDeletingRef.current = true;
                timer = setTimeout(type, delayBetweenWords);
            } else if (isWordDeleting && text === '') {
                isDeletingRef.current = false;
                currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
                timer = setTimeout(type, delayBetweenWords);
            } else {
                setText((prevText) => {
                    if (isWordDeleting) {
                        return currentWord.substring(0, prevText.length - 1);
                    } else {
                        return currentWord.substring(0, prevText.length + 1);
                    }
                });
                timer = setTimeout(type, typingSpeed);
            }
        };

        timer = setTimeout(type, typingSpeed);

        return () => clearTimeout(timer);
    }, [text]);

    return (
        <h1>
            {text}
            <span className="cursor">|</span>
        </h1>
    );
};

export default AnimatedTyping;
