import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AngleLeft from '../assets/component-icon/angle-left.svg';
import HouseChimney from '../assets/component-icon/house-chimney.svg';
import { useNavigation } from '@react-navigation/native';

export default function UsedTradeProductDetailHeaderLeft() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginRight: 25}} onPress={()=> {navigation.goBack()}}>
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
