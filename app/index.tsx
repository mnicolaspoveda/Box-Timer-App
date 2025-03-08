import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

import TimerAdjuster from '@/components/TimerAdjuster';
import RoundsAdjuster from '@/components/RoundsAdjuster';

export default function Index() {
  const [workTime, setWorkTime] = useState<number>(180);
  const [breakTime, setBreakTime] = useState<number>(60);
  const [rounds, setRounds] = useState<number>(8);

  return (
    <View style={styles.container}>
      <TimerAdjuster
        label="Work"
        value={workTime}
        onIncrement={() => { setWorkTime((prev: number) => Math.min(prev + 15, 300)) }}
        onDecrement={() => { setWorkTime((prev: number) => Math.max(prev - 15, 15)) }}
      />
      <TimerAdjuster
        label="Break"
        value={breakTime}
        onIncrement={() => { setBreakTime((prev: number) => Math.min(prev + 5, 60)) }}
        onDecrement={() => { setBreakTime((prev: number) => Math.max(prev - 5, 5)) }}
      />
      <RoundsAdjuster
        value={rounds}
        onIncrement={() => { setRounds((prev: number) => Math.min(prev + 1, 15)); }}
        onDecrement={() => { setRounds((prev: number) => Math.max(prev - 1, 1)); }}
      />

      <Link style={styles.link} href="./timer" >Start</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: 'white',
  },
  link: {
    color: 'lightblue',
  }
}); 