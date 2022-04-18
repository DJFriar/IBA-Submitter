import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import RideLogScreen from '../screens/RideLogScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RideHistoryScreen from '../screens/RideHistoryScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (

  <Tab.Navigator 
    initialRouteName='RideListNavigator'
  >
    <Tab.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={['fas', 'screwdriver-wrench']} color={color} size={size * 1.3} />
      }} 
    />
    <Tab.Screen 
      name="Current Ride" 
      component={RideLogScreen} 
      options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={['fas', 'motorcycle']} color={color} size={size * 1.3} />
      }} 
    />
    <Tab.Screen 
      name="Past Rides" 
      component={RideHistoryScreen} 
      options={{
        tabBarIcon: ({ color, size }) => <FontAwesomeIcon icon={['fas', 'rectangle-vertical-history']} color={color} size={size * 1.3} />
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator;