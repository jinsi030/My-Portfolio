import React, { useEffect, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#@*!~';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  delay = 200,
  speed = 35
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let iteration = 0;
    const maxIterations = text.length * 3;

    timer = setTimeout(() => {
      const interval = setInterval(() => {
        iteration++;

        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n' || char === '.') return char;
            if (index < iteration / 3) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('');

        setDisplayText(scrambled);

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={`${className} ${!isDone ? 'font-technical' : ''}`}>
      {displayText || text}
    </span>
  );
};
