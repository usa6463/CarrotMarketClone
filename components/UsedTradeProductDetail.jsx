import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function UsedTradeProductDetail() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text>안녕하세요</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
