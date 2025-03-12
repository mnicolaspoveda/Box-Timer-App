import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface TimerDisplayProps {
  seconds: number;
  isRunning: boolean;
  initialTime: number;
}

export default function TimerDisplay({ seconds, isRunning, initialTime }: TimerDisplayProps) {


  const formattedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  

  return (
    <View style={styles.container}>
      <Text style={[styles.timer, { color: isRunning ? 'white' : 'black' }]}>{formattedTime(seconds)}</Text>
      <Text style={[styles.label, { color: isRunning ? 'white' : 'black' }]}>{formattedTime(initialTime)}</Text>

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
  label: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
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