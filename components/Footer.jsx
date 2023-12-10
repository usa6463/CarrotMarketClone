import {TouchableOpacity, View, Text, StyleSheet, Image} from "react-native";
import CircleUser from '../assets/circle-user.svg';
import HouseChimney from '../assets/house-chimney.svg';
import Memo from '../assets/memo.svg';
import SearchLocation from '../assets/search-location.svg';
import Messages from '../assets/messages.svg';

export default function Footer() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <HouseChimney width={50} height={20} fill={"#fff"}></HouseChimney>
                <Text style={styles.buttonText}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Memo width={60} height={20} fill={"#fff"}></Memo>
                <Text style={styles.buttonText}>동네생활</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <SearchLocation width={60} height={20} fill={"#fff"}></SearchLocation>
                <Text style={styles.buttonText}>내 근처</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Messages width={60} height={20} fill={"#fff"}></Messages>
                <Text style={styles.buttonText}>채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <CircleUser width={60} height={20} fill={"#fff"}></CircleUser>
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
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    mapMarkerImage: {
        width: 20, // 이미지의 폭 조절
        height: 20, // 이미지의 높이 조절
        marginRight: 10, // 이미지와 텍스트 사이의 간격 조절
    },
    button: {
        backgroundColor: '#212123',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
    },
});