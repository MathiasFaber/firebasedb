// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase/compat";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import CarList from './components/CarList'
import CarDetails from './components/CarDetails'
import Add_edit_car from './components/Add_edit_car';


const firebaseConfig = {
  apiKey: "AIzaSyAFZPd_IS2hMcwhwjHBr1ENANA9Z4GXInA",
  authDomain: "fir-db-a0f52.firebaseapp.com",
  projectId: "fir-db-a0f52",
  storageBucket: "fir-db-a0f52.appspot.com",
  messagingSenderId: "564638001504",
  appId: "1:564638001504:web:b96751196fd9ba9b695605",
  measurementId: "G-EQDNHME0ZG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Tab.Screen name="CarList" component={CarList} />
      <Tab.Screen name="CarDetails" component={CarDetails} />
      <Tab.Screen name="AddEditCar" component={Add_edit_car} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={StackNavigation} />      
        <Tab.Screen name={'Add Car'} component={Add_edit_car} />
      </Tab.Navigator>
    </NavigationContainer>
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
