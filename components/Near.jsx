import {StyleSheet, Text, View} from "react-native";

export default function Near() {
    return (
        <View style={styles.container}>
            <Text>Near Component!</Text>
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
