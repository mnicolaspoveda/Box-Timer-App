import { Stack } from "expo-router";
import { TimerProvider } from "@/context/timerContext";

export default function RootLayout() {
  return (
  <TimerProvider>
    <Stack>
      <Stack.Screen
        name="config"
        options={{ title: "Configuración" }}
      />
      <Stack.Screen 
        name="timer" 
        options={{title: 'Timer'}} 
      />
    </Stack>
  </TimerProvider>
  )
}
