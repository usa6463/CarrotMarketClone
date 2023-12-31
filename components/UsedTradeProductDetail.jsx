import React, {useState} from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box";
import ImageViewer from 'react-native-image-zoom-viewer';

export default function UsedTradeProductDetail({navigation, route}) {

    const [imageViewer, setImageViewer] = useState(false)
    const [curImageViewerIndex, setCurImageViewerIndex] = useState(0)

    // TODO 원래는 route.params.id 으로 글 번호를 받아오고 이 글번호로 API 호출하여 정보 받아와야 한다.

    const sample = {
        "1": {
            "img": [require("../assets/sample-data/home/sell_product_img1.jpeg"),require("../assets/sample-data/home/sell_product_img2.jpeg")]
        },
        "2": {
            "img": [require("../assets/sample-data/home/sell_product_img2.jpeg")]
        },
        "3": {
            "img": [require("../assets/sample-data/home/sell_product_img3.jpeg")]
        },
        "4": {
            "img": [require("../assets/sample-data/home/sell_product_img4.jpeg")]
        },
        "5": {
            "img": [require("../assets/sample-data/home/sell_product_img5.jpeg")]
        },
        "6": {
            "img": [require("../assets/sample-data/home/sell_product_img6.jpeg")]
        },
        "7": {
            "img": [require("../assets/sample-data/home/sell_product_img7.jpeg")]
        },
        "8": {
            "img": [require("../assets/sample-data/home/sell_product_img8.jpeg")]
        },
        "9": {
            "img": [require("../assets/sample-data/home/sell_product_img9.jpeg")]
        }
    };

    const data = sample[route.params.id]

    return (
        <View style={styles.container}>
            <View>
                <Modal visible={imageViewer} transparent={true}>
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
                />
                <StatusBar style="light" />
                <Text>안녕하세요 {route.params.id}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212123',
    },
});
