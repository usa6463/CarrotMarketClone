import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function UsedTradeProductDetail({navigation, route}) {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text>안녕하세요 {route.params.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212123',
    },
});
