import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header/>
            </View>

            <View style={styles.contentView}>
                <ScrollView>
                    <Content/>
                    <Content/>
                    <Content/>
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
        flex: 7,
        paddingLeft:15,
        paddingRight:15
    },
    scrollView: {

    }
});
