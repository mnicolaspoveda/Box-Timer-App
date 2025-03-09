import { useState, useEffect } from 'react';

export function useTimer(workTime: number, breakTime: number, preparationTime: number, rounds: number) {
  const [timeRemaining, setTimeRemaining] = useState(preparationTime > 0 ? preparationTime : workTime);
  const [isRunning, setIsRunning] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [isOnRound, setIsOnRound] = useState(preparationTime === 0);
  const [stage, setStage] = useState<'Prepare' | 'onRound' | 'Break'>(preparationTime > 0 ? 'Prepare' : 'onRound');

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const id = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (isRunning && timeRemaining === 0) {
      if (stage === 'Prepare') {
        setTimeRemaining(workTime);
        setIsOnRound(true);
        setStage('onRound');
      } else if (isOnRound) {
        setTimeRemaining(breakTime);
        setIsOnRound(false);
        setStage('Break');
      } else {
        if (currentRound < rounds) {
          setCurrentRound((round) => round + 1);
          setTimeRemaining(workTime);
          setIsOnRound(true);
          setStage('onRound');
        } else {
          setIsRunning(false);
        }
      }
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeRemaining, breakTime, workTime, rounds, stage, isOnRound, currentRound]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
  };
  const resetTimer = () => {
    setTimeRemaining(preparationTime > 0 ? preparationTime : workTime);
    setIsRunning(false);
    setIsOnRound(preparationTime === 0);
    setCurrentRound(1);
    setStage(preparationTime > 0 ? 'Prepare' : 'onRound');
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return {
    timeRemaining,
    isRunning,
    currentRound,
    isOnRound,
    stage,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}