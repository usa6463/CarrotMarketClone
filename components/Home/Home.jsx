import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header/>
            </View>

            <View style={styles.contentView}>
                <ScrollView>
                    <Text>포르쉐 911</Text>
                    <Text>갤럭시 제트폴드3</Text>
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#212123',
    },
    headerView: {
        flex: 1,
    },
    contentView: {
        flex: 7
    }
});
