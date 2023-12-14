import {StyleSheet, Text, View} from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftInnerContainer}>
                <Text style={styles.text}>지역명</Text>
            </View>
            <View style={styles.rightInnerContainer}>
                <Text style={styles.text}>검색</Text>
                <Text style={styles.text}>알람</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#212123',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
    },
    leftInnerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightInnerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 20,
        fontWeight: 'bold'
    }
});
