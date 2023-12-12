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
                {currentMainPage === "home" ?
                    (<HouseChimney width={svg_default_width} height={svg_default_height} fill={svg_active_line_color}></HouseChimney>) :
                    (<HouseChimney width={svg_default_width} height={svg_default_height} fill={svg_default_line_color}></HouseChimney>)}
                {currentMainPage === "home" ?
                    (<Text style={styles.activeButtonText}>홈</Text>) :
                    (<Text style={styles.buttonText}>홈</Text>)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("townlife")}>
                <Memo width={svg_default_width} height={svg_default_height} fill={svg_default_line_color}></Memo>
                <Text style={styles.buttonText}>동네생활</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("near")}>
                <SearchLocation width={svg_default_width} height={svg_default_height} fill={svg_default_line_color}></SearchLocation>
                <Text style={styles.buttonText}>내 근처</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("chat")}>
                <Messages width={svg_default_width} height={svg_default_height} fill={svg_default_line_color}></Messages>
                <Text style={styles.buttonText}>채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onButtonClick("mycarrot")}>
                <CircleUser width={svg_default_width} height={svg_default_height} fill={svg_default_line_color}></CircleUser>
                <Text style={styles.buttonText}>나의 당근</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#212123',
        paddingVertical: 0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    button: {
        backgroundColor: '#212123',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
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