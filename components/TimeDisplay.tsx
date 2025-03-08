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