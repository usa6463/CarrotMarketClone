import React from 'react';
import Main from "./components/Main"
import UsedTradeProductDetail from "./components/UsedTradeProductDetail"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsedTradeProductDetailHeaderRight from "./components/UsedTradeProductDetailHeaderRight";
import UsedTradeProductDetailHeaderLeft from "./components/UsedTradeProductDetailHeaderLeft";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#212123',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UsedTradeProductDetail"
                    component={UsedTradeProductDetail}
                    options={{
                        title: "",
                        headerLeft: UsedTradeProductDetailHeaderLeft,
                        headerRight: UsedTradeProductDetailHeaderRight}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}