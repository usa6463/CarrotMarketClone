import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header/>
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
    },
});
