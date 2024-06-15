import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/components/Navigation'; 
import { getToken } from './src/utils/storage';

const App: React.FC = () => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Navigation  />
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quicksand-Bold'
  }
})
