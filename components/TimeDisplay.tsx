import {View, Text, StyleSheet} from 'react-native';

interface TimeDisplayProps {
    time: number;
    label: string;
}

export default function TimeDisplay({time, label}:TimeDisplayProps) {
    const formattedTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2,'0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime(time)}</Text>
            <Text style={styles.label}>{label}</Text>
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