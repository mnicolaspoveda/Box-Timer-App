import { View, Text, Button, StyleSheet} from "react-native";

import AdjustButtons from "./AdjustButtons";
import RoundsDisplay from "./RoundsDisplay";


interface TimerAdjusterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimerAdjuster({ value, onIncrement, onDecrement }: TimerAdjusterProps) {

  return (
    <View style={styles.container}>
      <RoundsDisplay rounds = {value} />
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