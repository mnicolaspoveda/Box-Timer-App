import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useTimer } from '@/context/timerContext';
import { useState, useEffect } from 'react';

import TimerDisplay from '@/components/TimerDisplay';

export default function TimerScreen() {
  const {rounds, workTime, breakTime} = useTimer(); //contexto
  
  const [timeRemaining, setTimeRemaining] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const id = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
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
  const resetTimer = () => {
    setTimeRemaining(workTime);
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <View style={styles.container}>
      <TimerDisplay seconds={timeRemaining} isRunning={isRunning} />
      <Text style={styles.text}>Controls</Text>
      <View style={styles.buttonContainer}>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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