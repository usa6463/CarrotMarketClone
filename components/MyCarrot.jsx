import {StyleSheet, Text, View, Button} from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";

export default function MyCarrot() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Button title="Show modal" onPress={toggleModal} />

            <Modal
                isVisible={isModalVisible}
                animationIn={"lightSpeedIn"}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{'color':'white'}}>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212123',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
