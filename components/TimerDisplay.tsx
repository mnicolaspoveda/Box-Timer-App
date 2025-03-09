import { Text, View, StyleSheet } from "react-native";

interface TimerDisplayProps {
    seconds: number;
    isRunning: boolean;
}

export default function TimerDisplay({seconds, isRunning}: TimerDisplayProps) {
    const formattedTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

  return (
    <View style = {styles.container}>

      <Text style = {styles.timer}>{formattedTime(seconds)}</Text>

      {isRunning && <Text >Running...</Text>}
      {!isRunning && <Text >Paused</Text>}

      
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        fontSize: 100,
        color: '#fff',
        fontWeight: 'bold',
    },
    });