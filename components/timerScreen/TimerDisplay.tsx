import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface TimerDisplayProps {
    seconds: number;
    isRunning: boolean;
}

export default function TimerDisplay({ seconds, isRunning }: TimerDisplayProps) {
    
  const formattedTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formattedTime(seconds)}</Text>
      <Text selectable={false} style={isRunning ? styles.running : styles.paused}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  timer: {
    fontSize: 80,
    color: '#000',
    fontWeight: 'bold',
  },
  running: {
    color: 'green',
    fontSize: 24,
    marginTop: 10,
  },
  paused: {
    color: 'red',
    fontSize: 24,
    marginTop: 10,
  },
});