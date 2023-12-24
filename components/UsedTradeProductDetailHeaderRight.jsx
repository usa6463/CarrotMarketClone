import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function UsedTradeProductDetailHeaderRight() {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>

            </View>
            <View style={styles.rightView}>
                <TouchableOpacity onPress={() => alert('Menu button pressed')}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftView: {
        flex: 2
    },
    rightView: {
        flex: 1
    }
});
