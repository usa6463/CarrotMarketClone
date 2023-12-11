import {TouchableOpacity, View, Text, StyleSheet, Image} from "react-native";
import CircleUser from '../assets/circle-user.svg';
import HouseChimney from '../assets/house-chimney.svg';
import Memo from '../assets/memo.svg';
import SearchLocation from '../assets/search-location.svg';
import Messages from '../assets/messages.svg';

export default function Footer({ onButtonClick }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={ () => onButtonClick("home") }>
                <HouseChimney width={50} height={20} fill={"#fff"}></HouseChimney>
                <Text style={styles.buttonText}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => onButtonClick("townlife") }>
                <Memo width={60} height={20} fill={"#fff"}></Memo>
                <Text style={styles.buttonText}>동네생활</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => onButtonClick("near") }>
                <SearchLocation width={60} height={20} fill={"#fff"}></SearchLocation>
                <Text style={styles.buttonText}>내 근처</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => onButtonClick("chat") }>
                <Messages width={60} height={20} fill={"#fff"}></Messages>
                <Text style={styles.buttonText}>채팅</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => onButtonClick("mycarrot") }>
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
        color: '#fff',
        marginTop: 10,
        fontSize: 10
    },
});