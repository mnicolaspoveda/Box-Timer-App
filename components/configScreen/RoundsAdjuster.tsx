import { View, Text, Pressable, StyleSheet } from "react-native";

interface TimerAdjusterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimerAdjuster({ value, onIncrement, onDecrement }: TimerAdjusterProps) {

  return (
    <View style={styles.container}>
      <View style={styles.roundsContainer}>
        <Text style={styles.rounds}>{value}</Text>
        <Text style={styles.label}>Rounds </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Center horizontally
    backgroundColor: '#25292e',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  roundsContainer: {
    alignItems: 'center', // Center horizontally
    backgroundColor: '#25292e',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    width: 80,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  rounds: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    fontSize: 18,
    color: '#d3d3d3',
    marginTop: 5,
  },
});