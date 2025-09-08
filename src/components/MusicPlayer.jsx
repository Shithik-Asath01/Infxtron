import React, { useState, useEffect, useRef } from 'react';
import Music from '../assets/music/feel-good.mp3';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Track playback state
  const audioRef = useRef(null); // Reference for audio element

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isPlaying) { // Play only if not already playing
        audioRef.current.play().catch(error => console.error('Error playing audio:', error));
        setIsPlaying(true); // Update playing state
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => { // Cleanup function
      document.removeEventListener('click', handleUserInteraction);
      audioRef.current.pause(); // Pause when component unmounts
      setIsPlaying(false); // Update playing state
    };
  }, []);

  return (
    <audio ref={audioRef} src={Music} controls={false} />
  );
}

export default MusicPlayer;