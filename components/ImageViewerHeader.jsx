import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import X from '../assets/component-icon/x.svg';

export default function ImageViewerHeader() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <X width="20" height="20" fill="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        marginLeft:20
    },
    text : {
        color:'white'
    }
});
