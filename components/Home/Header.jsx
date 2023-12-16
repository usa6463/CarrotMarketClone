import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AngleDown from '../../assets/component-icon/angle-down.svg';
import Search from '../../assets/component-icon/search.svg';
import Bell from '../../assets/component-icon/bell.svg';

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
                <TouchableOpacity>
                    <Search width="20" height="20" fill="white"></Search>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Bell width="20" height="20" fill="white"></Bell>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
        paddingBottom: 15,
    },
    leftInnerContainer: {
        paddingLeft: 8,
        flex:3,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightInnerContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        fontSize: 18,
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
