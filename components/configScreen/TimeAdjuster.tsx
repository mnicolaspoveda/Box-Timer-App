import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";

interface TimerAdjusterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function TimeAdjuster({
  label,
  value,
  onIncrement,
  onDecrement,
}: TimerAdjusterProps) {
  const formattedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formattedTime(value)}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          icon="minus"
          size={50}
          mode="contained"
          onPress={onDecrement}
        />
        <IconButton
          icon="plus"
          size={50}
          mode="contained"
          onPress={onIncrement}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  timeContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000",
  },
  label: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
