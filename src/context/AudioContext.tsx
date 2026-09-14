'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  toggleAmbiance: () => void;
  volume: number;
  setVolume: (v: number) => void;
}

const AmbientAudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const padOscsRef = useRef<OscillatorNode[]>([]);

  // Joyful, whimsical children's pentatonic music-box melody notes (C major scale frequencies in Hz)
  // C4, D4, E4, G4, A4, C5, D5, E5, G5
  const melodyNotes = [
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    659.25, // E5
    587.33, // D5
    523.25, // C5
    392.00, // G4
    440.00, // A4
    523.25, // C5
    659.25, // E5
    783.99, // G5
    659.25, // E5
    523.25, // C5
    587.33, // D5
  ];

  // Play a single bright, warm celesta / glockenspiel bell chime note
  const playCelestaNote = (ctx: AudioContext, masterGain: GainNode, freq: number) => {
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      // Sine wave with subtle harmonic for warm toy piano / celesta bell character
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Fast sparkle attack + gentle lingering bell decay
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.22, now + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      // Soft lowpass filter to keep it soothing and gentle for kids' ears
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3200, now);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 1.9);
    } catch {
      // ignore
    }
  };

  const startMusic = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.5, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // 1. Warm, uplifting background harmony chords (Soft Major Pad: C3, E3, G3)
      const padFreqs = [130.81, 164.81, 196.00, 261.63]; // C3, E3, G3, C4
      const padOscs: OscillatorNode[] = [];

      padFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const padGain = ctx.createGain();
        const padFilter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        padFilter.type = 'lowpass';
        padFilter.frequency.setValueAtTime(350, ctx.currentTime);

        padGain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(padFilter);
        padFilter.connect(padGain);
        padGain.connect(masterGain);

        osc.start();
        padOscs.push(osc);
      });
      padOscsRef.current = padOscs;

      // 2. Play the gentle storybook music-box melody rhythmically
      let noteIndex = 0;
      playCelestaNote(ctx, masterGain, melodyNotes[0]);

      intervalRef.current = setInterval(() => {
        if (ctx.state === 'running') {
          noteIndex = (noteIndex + 1) % melodyNotes.length;
          playCelestaNote(ctx, masterGain, melodyNotes[noteIndex]);
        }
      }, 650); // Playful storybook tempo (~92 BPM)

      setIsPlaying(true);
    } catch (e) {
      console.error('Audio start error:', e);
    }
  };

  const stopMusic = () => {
    try {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (padOscsRef.current) {
        padOscsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch {}
        });
        padOscsRef.current = [];
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    } catch (e) {
      console.error('Audio stop error:', e);
    }
  };

  const toggleAmbiance = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        volume * 0.5,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <AmbientAudioContext.Provider
      value={{
        isPlaying,
        toggleAmbiance,
        volume,
        setVolume,
      }}
    >
      {children}
    </AmbientAudioContext.Provider>
  );
};

export const useAmbientAudio = () => {
  const context = useContext(AmbientAudioContext);
  if (!context) {
    throw new Error('useAmbientAudio must be used within an AudioProvider');
  }
  return context;
};
