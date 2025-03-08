import { View, Text, Button, StyleSheet} from "react-native";

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
      <TimeDisplay time={value} label={label} />
      <AdjustButtons onIncrement={onIncrement} onDecrement={onDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25292e',
    marginVertical: 10,
  },
  time: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    flex: 1,
    color: 'gray',
  },

});