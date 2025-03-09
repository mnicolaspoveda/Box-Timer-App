import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link} from 'expo-router';
import { useTimer } from '@/context/timerContext';

import TimerAdjuster from '@/components/TimerAdjuster';
import RoundsAdjuster from '@/components/RoundsAdjuster';

export default function ConfigScreen() {
  const { workTime, setWorkTime, breakTime, setBreakTime, rounds, setRounds } = useTimer();

  return (
    <View style={styles.container}>
      <TimerAdjuster
        label="Work"
        value={workTime}
        onIncrement={() => { setWorkTime(Math.min(workTime + 15, 300))}}
        onDecrement={() => { setWorkTime(Math.max(workTime - 15, 15)) }}
      />
      <TimerAdjuster
        label="Break"
        value={breakTime}
        onIncrement={() => { setBreakTime(Math.min(breakTime + 5, 60)) }}
        onDecrement={() => { setBreakTime(Math.max(breakTime - 5, 5)) }}
      />
      <RoundsAdjuster
        value={rounds}
        onIncrement={() => { setRounds(Math.min(rounds + 1, 15)); }}
        onDecrement={() => { setRounds(Math.max(rounds - 1, 1)); }}
      />
      <TimerAdjuster
        label= "Preparation time"
        value = {0}
        onIncrement = {() => {}}
        onDecrement = {() => {}}
      />
      <TimerAdjuster
        label= "Switch during round"
        value={0}
        onIncrement = {() => {}}
        onDecrement = {() => {}}
      />

      <Link href="./timer" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
    padding: 20,
    paddingHorizontal: 100,
  },
  button: {
    backgroundColor: '#2a9d8f',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});