import React from 'react';
import { View, StyleSheet } from "react-native";
import { IconButton, Text } from 'react-native-paper';

interface RoundsAdjusterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function RoundsAdjuster({ value, onIncrement, onDecrement }: RoundsAdjusterProps) {

  return (
    <View style={styles.container}>
      <View style={styles.roundsContainer}>
        <Text style={styles.rounds}>{value}</Text>
        <Text style={styles.label}>Rounds </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton icon="minus" size={50} mode="contained" onPress={onDecrement} />
        <IconButton icon="plus" size={50} mode="contained" onPress={onIncrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#blank',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  roundsContainer: {
    alignItems: 'flex-start', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rounds: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
});