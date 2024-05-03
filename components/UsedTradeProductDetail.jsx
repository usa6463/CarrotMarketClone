import Modal from "react-native-modal";
import React, {useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box";
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageViewerHeader from "./ImageViewerHeader";
import * as Progress from 'react-native-progress';

export default function UsedTradeProductDetail({navigation, route}) {

    const [imageViewer, setImageViewer] = useState(false)
    const [curImageViewerIndex, setCurImageViewerIndex] = useState(0)
    const [mannerTempDescVisible, setMannerTempDescVisible] = useState(false)

    const toggleModal = () => {
        setMannerTempDescVisible(!mannerTempDescVisible);
    };

    // TODO 원래는 route.params.id 으로 글 번호를 받아오고 이 글번호로 API 호출하여 정보 받아와야 한다.

    const sample = {
        "1": {
            "img": [require("../assets/sample-data/home/sell_product_img1.jpeg"),require("../assets/sample-data/home/sell_product_img2.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저1",
            "userTown": "역삼동",
            "mannerTemp": 48.1
        },
        "2": {
            "img": [require("../assets/sample-data/home/sell_product_img2.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저2",
            "userTown": "잠실동",
            "mannerTemp": 50.2
        },
        "3": {
            "img": [require("../assets/sample-data/home/sell_product_img3.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저3",
            "userTown": "장지동",
            "mannerTemp": 56.4
        },
        "4": {
            "img": [require("../assets/sample-data/home/sell_product_img4.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저4",
            "userTown": "위례동",
            "mannerTemp": 58.0
        },
        "5": {
            "img": [require("../assets/sample-data/home/sell_product_img5.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저5",
            "userTown": "역삼동",
            "mannerTemp": 63.3
        },
        "6": {
            "img": [require("../assets/sample-data/home/sell_product_img6.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저6",
            "userTown": "구로동",
            "mannerTemp": 51.8
        },
        "7": {
            "img": [require("../assets/sample-data/home/sell_product_img7.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저7",
            "userTown": "잠실동",
            "mannerTemp": 55.5
        },
        "8": {
            "img": [require("../assets/sample-data/home/sell_product_img8.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저8",
            "userTown": "역삼동",
            "mannerTemp": 67.7
        },
        "9": {
            "img": [require("../assets/sample-data/home/sell_product_img9.jpeg")],
            "userImg": require("../assets/sample-data/user/user_default.jpg"),
            "userID": "유저9",
            "userTown": "잠실동",
            "mannerTemp": 48.4
        }
    };

    const onExitButtonClick = (status) => {
        setImageViewer(status)
    }

    const data = sample[route.params.id]

    let mannerTempColor;
    let mannerTempImg;
    if (data.mannerTemp >= 0 && data.mannerTemp <= 25) {
        mannerTempColor = 'blue';
        mannerTempImg = require("../assets/sample-data/user/smile-beam.png")
    } else if (data.mannerTemp > 25 && data.mannerTemp <= 50) {
        mannerTempColor = 'skyblue';
        mannerTempImg = require("../assets/sample-data/user/smile-beam.png")
    } else if (data.mannerTemp > 50 && data.mannerTemp <= 75) {
        mannerTempColor = 'orange';
        mannerTempImg = require("../assets/sample-data/user/smile-beam.png")
    } else if (data.mannerTemp > 75 && data.mannerTemp <= 100) {
        mannerTempColor = 'red';
        mannerTempImg = require("../assets/sample-data/user/smile-beam.png")
    }


    return (
        <View style={styles.container}>
            <Modal
                visible={imageViewer}
                // transparent={true}
                // animationIn={"fadeIn"}
                // animationInTiming={1000}
                // animationOut={"fadeOut"}
                // animationOutTiming={1000}
            >
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

            <Modal
                visible={mannerTempDescVisible}
                animationIn={"lightSpeedIn"}
                // transparent={true}
                // animationInTiming={600} // 애니메이션 속도 설정
            >
                {/*<View*/}
                {/*    style={{ flex:1 }}*/}
                {/*    // onTouchEnd={() => setMannerTempDescVisible(false)}*/}
                {/*>*/}
                {/*    /!*<View style={{*!/*/}
                {/*    /!*    backgroundColor: 'transparent',*!/*/}
                {/*    /!*    position: 'absolute',*!/*/}
                {/*    /!*    top: 471,*!/*/}
                {/*    /!*    left: 360,*!/*/}
                {/*    /!*    borderStyle: 'solid',*!/*/}
                {/*    /!*    borderTopWidth: 1,*!/*/}
                {/*    /!*    borderRightWidth: 3,*!/*/}
                {/*    /!*    borderBottomWidth: 8,*!/*/}
                {/*    /!*    borderLeftWidth: 7,*!/*/}
                {/*    /!*    borderTopColor: 'transparent',*!/*/}
                {/*    /!*    borderRightColor: 'transparent',*!/*/}
                {/*    /!*    borderBottomColor: 'white',*!/*/}
                {/*    /!*    borderLeftColor: 'transparent',*!/*/}
                {/*    /!*    flex:1*!/*/}
                {/*    /!*}}>*!/*/}
                {/*    /!*</View>*!/*/}

                {/*    /!*<View style={{*!/*/}
                {/*    /!*    width:260,*!/*/}
                {/*    /!*    height:70,*!/*/}
                {/*    /!*    backgroundColor:'white',*!/*/}
                {/*    /!*    position: 'absolute',*!/*/}
                {/*    /!*    top: 480,*!/*/}
                {/*    /!*    left: 120,*!/*/}
                {/*    /!*    borderRadius: 5*!/*/}
                {/*    /!*}}>*!/*/}
                {/*    /!*    <Text style={{*!/*/}
                {/*    /!*        fontSize:13,*!/*/}
                {/*    /!*        color:'black',*!/*/}
                {/*    /!*        margin:10,*!/*/}
                {/*    /!*        fontWeight: 'bold'*!/*/}
                {/*    /!*    }}>매너온도는 당근 사용자로부터 받은 칭찬, 후기, 비매너 평가, 운영자 제재 등을 종합해서 만든 매너 지표예요.</Text>*!/*/}
                {/*    /!*</View>*!/*/}
                {/*    <Button title="Hide modal" onPress={()=>setMannerTempDescVisible(!mannerTempDescVisible)} />*/}
                {/*</View>*/}
                <View style={{ flex: 1 }}>
                    <Text style={{'color':'white'}}>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>

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
                        <View style={styles.userMannerTempDetailView}>
                            <View>
                                <Text style={{color:mannerTempColor, fontSize: 17, fontWeight: 700, marginBottom:3}}>{data.mannerTemp}°C</Text>
                                <Progress.Bar
                                    progress={data.mannerTemp*0.01}
                                    width={55}
                                    unfilledColor={'#34373D'}
                                    borderWidth={0}
                                    height={4}
                                    color={mannerTempColor}
                                />
                            </View>
                            <Image source={mannerTempImg} style={styles.mannerTempImage}/>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop: 8}}>
                            <TouchableOpacity onPress={()=>{setMannerTempDescVisible(!mannerTempDescVisible)}}>
                                <Text style={{color:'#5C6066', textDecorationLine: 'underline', fontSize:12}}>매너온도</Text>
                            </TouchableOpacity>
                        </View>

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
    mannerTempImage: {
        height: 25,
        width:25,
    },
    userIDView: {
        flex:4,
        marginLeft: 6
    },
    userMannerTempView: {
        flex:2
    },
    userMannerTempDetailView: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});