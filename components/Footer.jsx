import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import CircleUser from '../assets/circle-user.svg';
import HouseChimney from '../assets/house-chimney.svg';
import Memo from '../assets/memo.svg';
import SearchLocation from '../assets/search-location.svg';
import Messages from '../assets/messages.svg';

export default function Footer({ onButtonClick, currentMainPage }) {
    const svg_default_width = 50
    const svg_default_height = 20
    const svg_default_line_color = "gray"
    const svg_active_line_color = "#fff"
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("home")}>
                <HouseChimney width={svg_default_width} height={svg_default_height} fill={currentMainPage === "home" ? svg_active_line_color:svg_default_line_color}></HouseChimney>
                <Text style={currentMainPage === "home" ? styles.activeButtonText:styles.buttonText}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("townlife")}>
                <Memo width={svg_default_width} height={svg_default_height} fill={currentMainPage === "townlife" ? svg_active_line_color:svg_default_line_color}></Memo>
                <Text style={currentMainPage === "townlife" ? styles.activeButtonText:styles.buttonText}>동네생활</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("near")}>
                <SearchLocation width={svg_default_width} height={svg_default_height} fill={currentMainPage === "near" ? svg_active_line_color:svg_default_line_color}></SearchLocation>
                <Text style={currentMainPage === "near" ? styles.activeButtonText:styles.buttonText}>내 근처</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("chat")}>
                <Messages width={svg_default_width} height={svg_default_height} fill={currentMainPage === "chat" ? svg_active_line_color:svg_default_line_color}></Messages>
                <Text style={currentMainPage === "chat" ? styles.activeButtonText:styles.buttonText}>채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("mycarrot")}>
                <CircleUser width={svg_default_width} height={svg_default_height} fill={currentMainPage === "mycarrot" ? svg_active_line_color:svg_default_line_color}></CircleUser>
                <Text style={currentMainPage === "mycarrot" ? styles.activeButtonText:styles.buttonText}>나의 당근</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "flex-start",
        backgroundColor: '#212123',
        paddingTop: 10,
        borderTopWidth: 0.25,        // 상단 테두리 두께
        borderTopColor: 'gray'
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        color: 'gray',
        marginTop: 10,
        fontSize: 10
    },
    activeButtonText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 10
    },
});