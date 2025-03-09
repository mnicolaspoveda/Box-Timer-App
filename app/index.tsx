import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useTimer } from '@/contexts/timerContext';

import TimerAdjuster from '@/components/configScreen/TimeAdjuster';
import RoundsAdjuster from '@/components/configScreen/RoundsAdjuster';

export default function ConfigScreen() {
  const { 
    workTime, setWorkTime,
    breakTime, setBreakTime,
    rounds, setRounds,
    preparationTime, setPreparationTime,
    switchTime, setSwitchTime} = useTimer();

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TimerAdjuster
          label="Work"
          value={workTime}
          onIncrement={() => { setWorkTime(Math.min(workTime + 15, 300)) }}
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
          label="Preparation time"
          value={preparationTime}
          onIncrement={() => { setPreparationTime(Math.min(preparationTime + 5, 60)) }}
          onDecrement={() => { setPreparationTime(Math.max(preparationTime - 5, 0)) }}
        />
        <TimerAdjuster
          label="Switch during round"
          value={switchTime}
          onIncrement={() => { setSwitchTime(Math.min(switchTime + 5, 60)) }}
          onDecrement={() => { setSwitchTime(Math.max(switchTime - 5, 0)) }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Link href="./timer" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#25292e',
    padding: 10,
  },
  controlsContainer: {
    width: '95%',
    marginBottom: 100,
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#2a9d8f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});