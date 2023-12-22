import React from 'react';
import Main from "./components/Main"
import UsedTradeProductDetail from "./components/UsedTradeProductDetail"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="UsedTradeProductDetail" component={UsedTradeProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}