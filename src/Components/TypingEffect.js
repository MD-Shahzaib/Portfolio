import React, { useState, useEffect, useRef } from 'react';

const AnimatedTyping = () => {

    const [text, setText] = useState('');
    const words = ['Mern Stack Developer', 'React Developer', 'React Native Developer'];
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
            }
            else if (isWordDeleting && text === '') {
                isDeletingRef.current = false;
                currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
                timer = setTimeout(type, delayBetweenWords);
            }
            else {
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
        <span className='text-blue-400 font-semibold'>{text}<span className="cursor">|</span></span>
    );
};

export default AnimatedTyping;