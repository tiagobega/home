import { useEffect, useState } from 'react';

export const useTypingEffect = (
  words: string[],
  typingSpeed: number = 150,
  delayBetweenWords: number = 2000,
  deletingSpeed: number = 75
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (words.length === 0) {
      // setDisplayedText('');
      // setWordIndex(0);
      // setCharIndex(0);
      // setIsDeleting(false);
      return;
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (charIndex < words[wordIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + words[wordIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    delayBetweenWords,
    deletingSpeed,
  ]);

  return displayedText;
};
