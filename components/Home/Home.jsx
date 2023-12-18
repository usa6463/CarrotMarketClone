import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
    const data1 = {
        "title": "중고 컴퓨터 팝니다ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
        "sub_info" : "삼전동 · 39분전",
        "price" : "3,000원",
        "interest": 10,
        "chat": 3
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header/>
            </View>

            <View style={styles.contentView}>
                <ScrollView>
                    <Content img={require("../../assets/sample-data/home/sell_product_img1.jpeg")} data={data1}/>
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
