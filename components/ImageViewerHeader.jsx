import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ImageViewerHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Heelo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor:'blue'
    },
    text : {
        color:'white'
    }
});
