import { View, StyleSheet } from "react-native";
import AdjustButtons from "./AdjustButtons";
import TimeDisplay from "./TimeDisplay";

interface TimerAdjusterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimerAdjuster({ label, value, onIncrement, onDecrement }: TimerAdjusterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <TimeDisplay time={value} label={label} />
      </View>
      <View style={styles.buttonsContainer}>
        <AdjustButtons onIncrement={onIncrement} onDecrement={onDecrement} />
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
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  timeContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});