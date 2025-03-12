import React from "react";
import { View, StyleSheet } from "react-native";
import { useTimer } from "@/contexts/timerContext";
import { useTimer as useCustomTimer } from "@/hooks/useTimer";
import { Text, IconButton } from "react-native-paper";
import TimerDisplay from "@/components/timerScreen/TimerDisplay";

export default function TimerScreen() {
  const { rounds, workTime, breakTime, preparationTime, switchTime } =
    useTimer(); //contexto
  const {
    timeRemaining,
    isRunning,
    currentRound,
    stage,
    startTimer,
    pauseTimer,
    resetTimer,
    resetCurrentStage,
    nextStage,
    initialTime,
  } = useCustomTimer(workTime, breakTime, preparationTime, rounds, switchTime); //logica de timer

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: stage === "onRound" ? "#000" : "lime" },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: stage === "onRound" ? "white" : "black" },
        ]}
      >
        Round {currentRound}/{rounds}
      </Text>
      <Text style={styles.text}>{stage}</Text>
      <TimerDisplay
        seconds={timeRemaining}
        isRunning={isRunning}
        initialTime={initialTime}
      />
      <View style={styles.prevNextButtonsContainer}>
        <IconButton
          icon="chevron-double-left"
          size={40}
          onPress={resetCurrentStage}
        />
        <IconButton icon="chevron-double-right" size={40} onPress={nextStage} />
      </View>
      <View style={styles.buttonsContainer}>
        {isRunning ? (
          <IconButton
            icon="pause"
            size={70}
            mode="contained"
            onPress={pauseTimer}
          />
        ) : (
          <IconButton
            icon="play"
            size={70}
            mode="contained"
            onPress={startTimer}
          />
        )}
        <IconButton
          icon="stop"
          size={70}
          mode="contained"
          onPress={resetTimer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  prevNextButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginBottom: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
