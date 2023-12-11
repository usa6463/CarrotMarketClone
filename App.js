import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from "./components/Footer";

export default function App() {
  const [currentMainPage, setCurrentMainPage] = useState("home")

  const onButtonClick = (componentName) => {
      setCurrentMainPage(componentName)
  }

  return (
    <View style={styles.container}>
      <Text>Carrot Market Clone Coding App : {currentMainPage} </Text>
      <StatusBar style="auto" />
      <Footer onButtonClick={ onButtonClick }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
