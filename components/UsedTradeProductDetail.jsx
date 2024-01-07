import React, {useState} from 'react';
import {Image, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box";
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageViewerHeader from "./ImageViewerHeader";

export default function UsedTradeProductDetail({navigation, route}) {

    const [imageViewer, setImageViewer] = useState(false)
    const [curImageViewerIndex, setCurImageViewerIndex] = useState(0)

    // TODO 원래는 route.params.id 으로 글 번호를 받아오고 이 글번호로 API 호출하여 정보 받아와야 한다.

    const sample = {
        "1": {
            "img": [require("../assets/sample-data/home/sell_product_img1.jpeg"),require("../assets/sample-data/home/sell_product_img2.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저1",
            "userTown": "역삼동",
            "mannerTempImg": "smile",
            "mannerTemp": 48.1
        },
        "2": {
            "img": [require("../assets/sample-data/home/sell_product_img2.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저2",
            "userTown": "잠실동",
            "mannerTempImg": "smile",
            "mannerTemp": 50.2
        },
        "3": {
            "img": [require("../assets/sample-data/home/sell_product_img3.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저3",
            "userTown": "장지동",
            "mannerTempImg": "smile",
            "mannerTemp": 56.4
        },
        "4": {
            "img": [require("../assets/sample-data/home/sell_product_img4.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저4",
            "userTown": "위례동",
            "mannerTempImg": "smile",
            "mannerTemp": 58.0
        },
        "5": {
            "img": [require("../assets/sample-data/home/sell_product_img5.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저5",
            "userTown": "역삼동",
            "mannerTempImg": "smile",
            "mannerTemp": 63.3
        },
        "6": {
            "img": [require("../assets/sample-data/home/sell_product_img6.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저6",
            "userTown": "구로동",
            "mannerTempImg": "smile",
            "mannerTemp": 51.8
        },
        "7": {
            "img": [require("../assets/sample-data/home/sell_product_img7.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저7",
            "userTown": "잠실동",
            "mannerTempImg": "smile",
            "mannerTemp": 55.5
        },
        "8": {
            "img": [require("../assets/sample-data/home/sell_product_img8.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저8",
            "userTown": "역삼동",
            "mannerTempImg": "smile",
            "mannerTemp": 67.7
        },
        "9": {
            "img": [require("../assets/sample-data/home/sell_product_img9.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저9",
            "userTown": "잠실동",
            "mannerTempImg": "smile",
            "mannerTemp": 48.4
        }
    };

    const onExitButtonClick = (status) => {
        setImageViewer(status)
    }

    const data = sample[route.params.id]

    return (
        <View style={styles.container}>
            <View>
                <Modal visible={imageViewer} transparent={true} animationType={"slide"}>
                    <ImageViewer
                        imageUrls={data.img.map((element)=>({
                            props: {
                                source: element
                            }
                        }))}
                        index={curImageViewerIndex}
                        enableSwipeDown={true}
                        onCancel = {()=>setImageViewer(false)}
                        onChange = {(index) =>setCurImageViewerIndex(index)}
                        renderHeader = {() => ImageViewerHeader(onExitButtonClick)}
                    />
                </Modal>
            </View>
            <ScrollView>
                <SliderBox
                    images={data.img}
                    onCurrentImagePressed={(index)=>{
                        setImageViewer(true)
                        setCurImageViewerIndex(index)
                    }}
                    firstItem={curImageViewerIndex}
                    sliderBoxHeight={420}
                />
                <StatusBar style="light" />
                <View style={styles.userInfoView}>
                    <View style={styles.userImageView}>
                        <Image
                            source={data.userImg}
                            style={styles.userImage}
                        />
                    </View>
                    <View style={styles.userIDView}>
                        <Text style={{fontSize:16, color: "white", paddingBottom:8}}>{data.userID}</Text>
                        <Text style={{fontSize:13, color:"gray"}}>{data.userTown}</Text>
                    </View>
                    <View style={styles.userMannerTempView}>
                        <Text>{data.mannerTemp}</Text>
                        <Text>{data.mannerTempImg}</Text>
                        <Text>매너온도</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212123',
    },
    userInfoView: {
        flexDirection: 'row',
        marginHorizontal:15,
        paddingVertical:15,
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
        justifyContent: "space-between"
    },
    userImageView: {
        flex:1
    },
    userImage: {
        height: 50,
        width:50,
        borderRadius:100
    },
    userIDView: {
        flex:4,
        marginLeft: 6
    },
    userMannerTempView: {
        flex:2
    }
});