import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import X from '../assets/component-icon/x.svg';

export default function ImageViewerHeader(onExitButtonClick) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {onExitButtonClick(false)}}>
                <X width="20" height="20" fill="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex:1,
        marginTop:50,
        marginLeft:20
    },
    text : {
        color:'white'
    }
});
