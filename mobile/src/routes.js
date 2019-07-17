import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed.js';
import New from './pages/New.js';

import logo from './assets/logo.png';


export default createAppContainer(

    createStackNavigator({
        Feed,    
        New,    
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image source={logo} style={{ marginHorizontal: 130 }}/>,
            headerBackTitle: null,
        },
        mode: 'modal'
    })

);