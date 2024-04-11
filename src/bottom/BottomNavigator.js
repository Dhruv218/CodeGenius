import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Learn from '../screens/Learn';
import Marketplace from '../screens/Marketplace';
import {Community} from '../screens/Community';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../assets/Home.webp')}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Learn"
        component={Learn}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../assets/learn.png')}
                style={{
                  width: 35,
                  height: 25,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../assets/marketplace.png')}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../assets/community.png')}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: tabInfo.focused ? 'blue' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
