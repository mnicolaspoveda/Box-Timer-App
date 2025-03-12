import { Stack } from "expo-router";
import { TimerProvider } from "@/contexts/timerContext";

export default function RootLayout() {
  return (
    <TimerProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Configuración" }} />
        <Stack.Screen name="timer" options={{ title: "Timer" }} />
      </Stack>
    </TimerProvider>
  );
}
