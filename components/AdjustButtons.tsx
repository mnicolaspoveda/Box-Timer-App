import { Pressable, View, StyleSheet, Text } from 'react-native';

interface AdjustButtonsProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export default function AdjustButtons({ onIncrement, onDecrement }: AdjustButtonsProps) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onDecrement}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onIncrement}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 50,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
});