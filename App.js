import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Footer from "./components/Footer";
import Home from "./components/Home";
import TownLife from "./components/TownLife";
import Near from "./components/Near";
import Chat from "./components/Chat";
import MyCarrot from "./components/MyCarrot";

export default function App() {
    const [currentMainPage, setCurrentMainPage] = useState("home")

    const onButtonClick = (componentName) => {
        setCurrentMainPage(componentName)
    }

    return (
        <View style={styles.container}>
            {currentMainPage === "home" && <Home/>}
            {currentMainPage === "townlife" && <TownLife/>}
            {currentMainPage === "near" && <Near/>}
            {currentMainPage === "chat" && <Chat/>}
            {currentMainPage === "mycarrot" && <MyCarrot/>}
            <Footer onButtonClick={onButtonClick}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
