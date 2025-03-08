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
        flexDirection: 'row',  
        alignItems: 'center',
        backgroundColor: '#25292e',
        marginVertical: 10,
    },
    time: {
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 18,
        flex: 1,
        color: 'gray',
    },
});