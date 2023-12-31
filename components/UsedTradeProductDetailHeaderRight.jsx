import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MenuDotsVertical from '../assets/component-icon/menu-dots-vertical.svg';
import ShareSquare from '../assets/component-icon/share-square.svg';

export default function UsedTradeProductDetailHeaderRight() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginRight: 25}}>
                <ShareSquare width="20" height="20" fill="white"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuDotsVertical width="20" height="20" fill="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
