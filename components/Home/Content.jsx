import {StyleSheet, View} from "react-native";

export default function Content() {
    return (
        <View style={styles.container}>
            <View style={styles.imgPart}></View>
            <View style={styles.contentPart}></View>
            <View style={styles.menuPart}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
        paddingBottom: 10,
        height: 100
    },
    imgPart: {
        flex:2,
    },
    contentPart: {
        flex:5,
    },
    menuPart: {
        flex:1,
    }
});
