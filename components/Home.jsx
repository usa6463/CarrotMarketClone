import {ScrollView, StyleSheet, Text, View} from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>지역명</Text>
            <ScrollView>
                <Text>포르쉐 911</Text>
                <Text>갤럭시 제트폴드3</Text>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#212123',
        paddingVertical: 0,
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
});
