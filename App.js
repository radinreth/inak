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
import DebtorCreateScreen from './src/screens/DebtorCreateScreen'
import DebtorShowScreen from './src/screens/DebtorShowScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  DebtorCreate: DebtorCreateScreen,
  DebtorShow: DebtorShowScreen,
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator);
