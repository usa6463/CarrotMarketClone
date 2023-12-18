import {StyleSheet, View, Text, Image} from "react-native";
import MenuDotsVertical from '../../assets/component-icon/menu-dots-vertical.svg';
import Messages from '../../assets/component-icon/messages.svg';
import Heart from '../../assets/component-icon/heart.svg';

export default function Content({img, data}) {
    return (
        <View style={styles.container}>
            <View style={styles.imgPart}>
                <Image source={img} style={styles.img}/>
            </View>
            <View style={styles.mainPart}>
                <View style={styles.upperMain}>
                    <View style={styles.textPart}>
                        <Text style={styles.contentTitle} numberOfLines={2} ellipsizeMode="tail">{data.title}</Text>
                        <Text style={styles.contentSubInfo}>{data.sub_info}</Text>
                        <Text style={styles.contentPrice}>{data.price}</Text>
                    </View>
                    <View style={styles.menuPart}>
                        <MenuDotsVertical width="15" height="15" fill="gray"/>
                    </View>
                </View>
                <View style={styles.lowerMain}>
                    {data.chat > 0 ?  getChatInfo(data):<Text/> }
                    {data.interest > 0 ? getInterestInfo(data):<Text/> }
                </View>

            </View>

        </View>
    )
}

function getChatInfo(data) {
    return (
        <View flexDirection={'row'}>
            <Messages width={10} height={10} fill={'white'}></Messages>
            <Text>{data.chat}</Text>
        </View>
    )
}

function getInterestInfo(data) {
    return (
        <View flexDirection={'row'}>
            <Heart width={10} height={10} fill={'white'}></Heart>
            <Text>{data.interest}</Text>
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
        height: 140
    },
    imgPart: {
        flex:1,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: "10"
    },
    mainPart: {
        flex:2
    },
    upperMain: {
        flex:3,
        flexDirection:'row'
    },
    lowerMain: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    textPart: {
        flex:5,
    },
    contentTitle: {
        color:'white',
        fontSize: 16,
    },
    contentSubInfo: {
        color:'gray',
        fontSize: 13
    },
    contentPrice: {
        color:'white',
        fontWeight:'bold',
        fontSize:'17'
    },
    menuPart: {
        flex:1,
    }
});
