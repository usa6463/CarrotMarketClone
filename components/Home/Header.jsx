import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AngleDown from '../../assets/angle-down.svg';
import Cowbell from '../../assets/cowbell.svg';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftInnerContainer}>
                <TouchableOpacity style={styles.leftInnerContainer}>
                    <Text style={styles.text}>지역명</Text>
                    <View style={styles.angleDownView}>
                        <AngleDown style={styles.angleDown}></AngleDown>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.rightInnerContainer}>
                <Text style={styles.text}>검색</Text>
                <Cowbell width="20" height="20" fill="white"></Cowbell>
                {/*<Text style={styles.text}>알람</Text>*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#212123',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
    },
    leftInnerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightInnerContainer: {
        flex:0.4,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginLeft: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    angleDownView: {
        flexDirection: 'row',
        marginTop: 2
    },
    angleDown: {
        width: "22",
        height: "13",
        fill: "white"
    }
});
