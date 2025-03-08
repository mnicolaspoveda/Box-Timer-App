import { Button, View, StyleSheet} from 'react-native';

interface AdjustButtonsProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export default function AdjustButtons({onIncrement, onDecrement}: AdjustButtonsProps) {
    return (
        <View style={styles.container}>
            <Button title="decrement" onPress={onDecrement} />
            <Button title="Increment" onPress={onIncrement} />
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
});