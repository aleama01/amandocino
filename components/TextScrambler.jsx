import React, { useState, useEffect } from 'react';

/**
 * Text scrambler component that animates the text.
 * 
 * @param phrase the string to animate.
 * @returns A span component that renders the text with scrambling animation.
 */
const TextScramble = ({ phrase }) => {
  const [text, setText] = useState('');
  const chars = "!<>-_[]{}—=+*^?#____________".split('');
  const charsLength = chars.length;

  useEffect(() => {
    let frameRequest;
    let frame = 0;
    const maxFrames = 30;
    let queue = [];

    const setTextPromise = (newText) => {
      return new Promise((resolve) => {
        const oldText = text;
        const length = Math.max(oldText.length, newText.length);
        queue = Array.from({ length }, (_, i) => {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * maxFrames * 0.5);
          const end = start + Math.floor(Math.random() * maxFrames * 0.5);
          return { from, to, start, end, char: from };
        });

        const updateFrame = () => {
          let output = '';
          let complete = 0;
          queue.forEach((item, i) => {
            const { from, to, start, end } = item;
            if (frame >= end) {
              complete++;
              output += to;
            } else if (frame >= start) {
              if (!item.char || Math.random() < 0.1) {
                item.char = chars[Math.floor(Math.random() * charsLength)];
              }
              output += `<span class="dud">${item.char}</span>`;
            } else {
              output += from;
            }
          });

          setText(output);
          if (complete === queue.length) {
            resolve();
          } else {
            frameRequest = requestAnimationFrame(updateFrame);
            frame++;
          }
        };

        updateFrame();
      });
    };

    setTextPromise(phrase).then(() => {
      setTimeout(() => {
        setText(phrase);
      }, 1500);
    });

    return () => {
      if (frameRequest) {
        cancelAnimationFrame(frameRequest);
      }
    };
  }, [phrase]);

  return <span className="text" dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TextScramble;
