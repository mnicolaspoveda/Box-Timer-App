import { Stack } from "expo-router";
import { TimerProvider } from "@/contexts/timerContext";
import { View, StyleSheet } from "react-native";


export default function RootLayout() {
  return (
    <TimerProvider>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Configuración" }}
          />
          <Stack.Screen
            name="timer/index"
            options={{ title: 'Timer' }}
          />
        </Stack>
      </View>
    </TimerProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
});