import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTimer } from '@/contexts/timerContext';
import { useTimer as useCustomTimer } from '@/hooks/useTimer';
import { Button, Text } from 'react-native-paper';
import TimerDisplay from '@/components/timerScreen/TimerDisplay';

export default function TimerScreen() {
  const { rounds, workTime, breakTime, preparationTime } = useTimer(); //contexto
  const {
    timeRemaining,
    isRunning,
    currentRound,
    stage,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useCustomTimer(workTime, breakTime, preparationTime, rounds);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Round {currentRound}/{rounds}</Text>
      <Text style={styles.text}>{stage}</Text>
      <TimerDisplay seconds={timeRemaining} isRunning={isRunning} />
      <Text style={styles.text}>Controls</Text>
      <View style={styles.buttonsContainer}>
        <Button mode="contained" onPress={startTimer} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Button>
        <Button mode="contained" onPress={pauseTimer} style={styles.button}>
          <Text style={styles.buttonText}>Pause</Text>
        </Button>
        <Button mode="contained" onPress={resetTimer} style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#000',
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
    marginHorizontal: 10,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});