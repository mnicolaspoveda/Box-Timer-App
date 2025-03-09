import {Text, View, StyleSheet} from 'react-native';

interface RoundsDisplayProps {
    rounds: number;
}

export default function RoundsDisplay({rounds}: RoundsDisplayProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.time}>{rounds}</Text>
      <Text style={styles.label}>Rounds </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: '#25292e',
      marginVertical: 10,
      padding: 10,
  },
  time: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#ffffff',
  },
  label: {
      fontSize: 18,
      color: '#d3d3d3',
      marginTop: 5,
  },
});