import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomPage from './Pages/WelcomPage';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import ComingSoon from './Pages/ComingSoon';
import WeatherDetails from './Pages/WeatherDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="WelcomPage" component={WelcomPage} />
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} /> */}
        <Stack.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
        <Stack.Screen options={{headerShown: false}} name="WeatherDetails" component={WeatherDetails} />
        <Stack.Screen options={{headerShown: false}} name="ComingSoon" component={ComingSoon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}