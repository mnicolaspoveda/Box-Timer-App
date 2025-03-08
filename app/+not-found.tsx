import { View, StyleSheet } from "react-native";
import { Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen name="not-found" options={{title: 'Not Found'}} />
            <View style={styles.container}>
                <Link style={styles.link} href="/" >Go to home</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    link:{
        color: 'lightblue',
    }
});