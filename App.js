/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Splash from './Splash'

import Onboarding from './Onboarding';

import Container from './Container'
import Details from './Details'
import Resturants from './Resturants'

import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
 
    Splash: Splash,
    Onboarding:Onboarding,
    
   
    
   
    
  Container: 
  {
    screen: Container, 
    navigationOptions: {
        header: null,
    },
},

Details:Details,
Resturants:Resturants,

  
});




     export default createAppContainer(AppNavigator);