import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {createStackNavigator} from "@react-navigation/native";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return <Home/>
}


