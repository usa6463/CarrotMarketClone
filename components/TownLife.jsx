import {StyleSheet, Text, View} from "react-native";

export default function TownLife() {
    return (
        <View style={styles.container}>
            <Text>TownLife Component!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212123',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
