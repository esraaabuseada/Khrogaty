import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Image} from 'react-native';
import { Icon } from 'native-base'
import Home from './Home'
import Search from './Search'
import FindPlaces from './FindPlaces'
import Resturants  from './Resturants'
import Thingstodo  from './Thingstodo'

import RestCoffees from './RestCoffees'



const getTabBarIcon = (navigation, focused, tintColor) => {
 
  const { routeName } = navigation.state;
  if (routeName === 'Home') {
    return (
    <Image
    source={
      focused
        ? require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/ghome.png')
        : require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/home.png')
    }
    style={{
      width: 20,
      height: 20,
      borderRadius: 40 / 2,
    }}
  />);
  } else if (routeName === 'Search') {
    return (<Image
      source={
        focused
          ? require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/gfilter.png')
          : require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/filter.png')
      }
      style={{
        width: 20,
        height: 20,
        borderRadius: 40 / 2,
      }}
    />);
  }else if (routeName === 'FindPlaces') {
    return (<Image
      source={
        focused
          ? require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/gfindplaces.png')
          : require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/findplaces.png')
      }
      style={{
        width: 20,
        height: 20,
        borderRadius: 40 / 2,
      }}
    />);
  }else if (routeName === 'Resturants') {
    return (<Image
      source={
        focused
          ? require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/grestaurants.png')
          : require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/restaurants.png')
      }
      style={{
        width: 20,
        height: 20,
        borderRadius: 40 / 2,
      }}
    />);
  }else if (routeName === 'Thingstodo') {
    return (<Image
      source={
        focused
          ? require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/gtodo.png')
          : require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/todo.png')
      }
      style={{
        width: 20,
        height: 20,
        borderRadius: 40 / 2,
      }}
    />);
  }
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: Home },

      Search: { screen: Search },
      FindPlaces:{screen:FindPlaces},
      Resturants:{screen:Resturants},
      Thingstodo:{screen:Thingstodo},

    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
    }
  )
);
