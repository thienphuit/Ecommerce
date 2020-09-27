import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'

const SplashScreen = () => {
  useEffect(() => {
    SplashScreenLib.hide()
  }, [])
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}
export default SplashScreen
