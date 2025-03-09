import { Text, View, StyleSheet, Pressable } from "react-native";

interface TimerAdjusterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimeAdjuster({ label, value, onIncrement, onDecrement }: TimerAdjusterProps) {
  
  const formattedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formattedTime(value)}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onIncrement}>
          <Text style={styles.buttonText} >+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#25292e',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  timeContainer: {
    flexDirection: 'column',
    alignItems: 'center', 
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    fontSize: 18,
    color: '#d3d3d3',
    marginTop: 5,
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
});