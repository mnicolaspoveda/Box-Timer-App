import React from 'react';
import { View, StyleSheet } from "react-native";
import { Button, Text } from 'react-native-paper';

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
        <Button mode="contained" onPress={onDecrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Button>
        <Button mode="contained" onPress={onIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Button>
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
    alignItems: 'center', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
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