import {ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
    const responseFromAPI = {
        "data1": {
            "img": require("../../assets/sample-data/home/sell_product_img1.jpeg"),
            "title": "중고 컴퓨터 팝니다ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ",
            "sub_info": "삼전동 · 39분전",
            "price": "3,000원",
            "interest": 10,
            "chat": 3,
            "key": 1
        },
        "data2": {
            "img": require("../../assets/sample-data/home/sell_product_img2.jpeg"),
            "title": "test2",
            "sub_info": "망원동 · 1분전",
            "price": "20,000원",
            "interest": 15,
            "key": 2,
            "chat": 6
        },
        "data3": {
            "img": require("../../assets/sample-data/home/sell_product_img3.jpeg"),
            "title": "test3",
            "sub_info": "강남구 · 10분전",
            "price": "15,000원",
            "interest": 8,
            "key": 3,
            "chat": 2
        },
        "data4": {
            "img": require("../../assets/sample-data/home/sell_product_img4.jpeg"),
            "title": "test4",
            "sub_info": "홍대입구 · 5분전",
            "price": "8,000원",
            "interest": 12,
            "key": 4,
            "chat": 4
        },
        "data5": {
            "img": require("../../assets/sample-data/home/sell_product_img5.jpeg"),
            "title": "test5",
            "sub_info": "신촌 · 20분전",
            "price": "25,000원",
            "interest": 18,
            "key": 5,
            "chat": 7
        },
        "data6": {
            "img": require("../../assets/sample-data/home/sell_product_img6.jpeg"),
            "title": "test6",
            "sub_info": "서초구 · 15분전",
            "price": "12,000원",
            "interest": 14,
            "key": 6,
            "chat": 5
        },
        "data7": {
            "img": require("../../assets/sample-data/home/sell_product_img7.jpeg"),
            "title": "test7",
            "sub_info": "잠실 · 8분전",
            "price": "18,000원",
            "interest": 11,
            "key": 7,
            "chat": 3
        },
        "data8": {
            "img": require("../../assets/sample-data/home/sell_product_img8.jpeg"),
            "title": "test8",
            "sub_info": "건대입구 · 25분전",
            "price": "30,000원",
            "interest": 20,
            "key": 8,
            "chat": 9
        },
        "data9": {
            "img": require("../../assets/sample-data/home/sell_product_img9.jpeg"),
            "title": "test9",
            "sub_info": "논현동 · 12분전",
            "price": "22,000원",
            "interest": 16,
            "key": 9,
            "chat": 6
        },
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Header/>
            </View>


            <View style={styles.contentView}>
                <ScrollView>
                    <View style={styles.innerContentView}>
                        {
                            Object.keys(responseFromAPI).map((key) =>
                            (
                                <Content
                                    img={responseFromAPI[key].img}
                                    data={responseFromAPI[key]}
                                    key={responseFromAPI[key].key}
                                />
                            ))
                        }
                    </View>
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
    },
    innerContentView: {
        paddingLeft:15,
        paddingRight:15
    },
    scrollView: {

    }
});
