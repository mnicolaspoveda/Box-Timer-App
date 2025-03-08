import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Configuración'}} />
      <Stack.Screen name="timer" options={{title: 'Timer'}} />
    </Stack>
  )
}
