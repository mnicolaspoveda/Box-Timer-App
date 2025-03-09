import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useTimer } from '@/contexts/timerContext';
import { useState, useEffect } from 'react';

import TimerDisplay from '@/components/timerScreen/TimerDisplay';

export default function TimerScreen() {
  const { rounds, workTime, breakTime } = useTimer(); //contexto

  const [timeRemaining, setTimeRemaining] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const id = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
    else if (isRunning && timeRemaining === 0) {
      if (isWorking) {
        //cambiar al break
        setTimeRemaining(breakTime);
        setIsWorking(false);
      } else {
        if (currentRound < rounds && !isWorking) {
          setCurrentRound((round) => round + 1);
          setTimeRemaining(workTime);
          setIsWorking(true);
        } else {
          setIsRunning(false);
        }
      }
    }
  }, [isRunning, timeRemaining]);

  //funciones de control
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
  };
  const resetTimer = () => {//deberia antes preguntar con un modal si esta seguro de resetear
    setTimeRemaining(workTime);
    setIsRunning(false);
    setIsWorking(true);
    setCurrentRound(1);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Round {currentRound}/{rounds}</Text>
      <Text style={styles.text}>{isWorking ? 'Working' : 'Break'}</Text>
      <TimerDisplay seconds={timeRemaining} isRunning={isRunning} />
      <Text style={styles.text}>Controls</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={pauseTimer}>
          <Text style={styles.buttonText}>Pause</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#2a9d8f',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});