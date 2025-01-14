import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../pages/HomeScreen';
import StackNavigationDemo from "./components/StackNavigationDemo";

export type RootStackParamList ={
    Home: undefined;
    StackDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
    </Stack.Navigator>
  )
}

export default RootNavigator