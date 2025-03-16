import { useState, useEffect } from 'react';

enum TimerStage {
  SWITCH = 'Switch',
  PREPARE = 'Prepare',
  ON_ROUND = 'onRound',
  BREAK = 'Break',
}

export function useTimer(workTime: number, breakTime: number, preparationTime: number, rounds: number, switchTime: number) {

  const [stage, setStage] = useState<TimerStage>(preparationTime > 0 ? TimerStage.PREPARE : TimerStage.ON_ROUND);
  const [timeRemaining, setTimeRemaining] = useState(preparationTime > 0 ? preparationTime : workTime);
  const [initialTime, setInitialTime] = useState(preparationTime > 0 ? preparationTime : workTime);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [isRunning, setIsRunning] = useState(true);


  const switchAlert = () => {
    const previousStage = stage;
    setStage(TimerStage.SWITCH);
    setTimeout(() => {
      setStage(previousStage);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning)
      if (timeRemaining > 0) {
        const id = setInterval(() => {
          setTimeRemaining((time) => time - 1);
          if (TimerStage.ON_ROUND === stage && workTime !== timeRemaining && (timeRemaining - 1) % switchTime === 0) {
            switchAlert();
          }
        }, 1000);
        setIntervalId(id);
        return () => clearInterval(id);
      } else {
        handleTimerEnd();
      }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeRemaining, breakTime, workTime, rounds, stage, currentRound]);

  const handleTimerEnd = () => {
    if (stage === 'Prepare') {
      setTimeRemaining(workTime);
      setStage(TimerStage.ON_ROUND);
      setInitialTime(workTime);
    } else if (TimerStage.ON_ROUND === stage && currentRound < rounds) {
      setTimeRemaining(breakTime);
      setStage(TimerStage.BREAK);
      setInitialTime(breakTime);
    } else {
      if (currentRound < rounds) {
        setCurrentRound((round) => round + 1);
        setTimeRemaining(workTime);
        setStage(TimerStage.ON_ROUND);
        setInitialTime(workTime);
      } else {
        setIsRunning(false);
      }
    }
  };

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
    setCurrentRound(1);
    setStage(preparationTime > 0 ? TimerStage.PREPARE : TimerStage.ON_ROUND);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const resetCurrentStage = () => setTimeRemaining(initialTime);

  const nextStage = () => {
    if (currentRound < rounds) {
      if (TimerStage.ON_ROUND === stage) {
        setTimeRemaining(breakTime);
        setStage(TimerStage.BREAK);
        setInitialTime(breakTime);
      } else {
        setCurrentRound((round) => round + 1);
        setTimeRemaining(workTime);
        setStage(TimerStage.ON_ROUND);
        setInitialTime(workTime);
      }
    }
  };

  return {
    timeRemaining,
    isRunning,
    currentRound,
    stage,
    initialTime,
    startTimer,
    pauseTimer,
    resetTimer,
    resetCurrentStage,
    nextStage,
  };
}