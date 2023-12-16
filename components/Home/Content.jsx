import {StyleSheet, View, Text} from "react-native";
import MenuDotsVertical from '../../assets/component-icon/menu-dots-vertical.svg';

export default function Content() {
    return (
        <View style={styles.container}>
            <View style={styles.imgPart}><Text>image</Text></View>
            <View style={styles.mainPart}>
                <View style={styles.upperMain}>
                    <View style={styles.textPart}><Text>textPart</Text></View>
                    <View style={styles.menuPart}>
                        <MenuDotsVertical width="15" height="15" fill="gray"/>
                    </View>
                </View>
                <View style={styles.lowerMain}>
                    <Text>lowerMain</Text>
                </View>

            </View>

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
        height: 100
    },
    imgPart: {
        flex:1,
    },
    mainPart: {
        flex:3
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
    menuPart: {
        flex:1,
    }
});
