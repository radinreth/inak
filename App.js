/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// Screens
import HomeScreen from './src/screens/HomeScreen'
import DebtorScreen from './src/screens/DebtorScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Debtor: DebtorScreen
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator);
