import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AngleLeft from '../assets/component-icon/angle-left.svg';
import HouseChimney from '../assets/component-icon/house-chimney.svg';

export default function UsedTradeProductDetailHeaderLeft() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginRight: 25}}>
                <AngleLeft width="20" height="20" fill="white"></AngleLeft>
            </TouchableOpacity>
            <TouchableOpacity>
                <HouseChimney width="20" height="20" fill="white"></HouseChimney>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
