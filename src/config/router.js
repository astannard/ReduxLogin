/* eslint-disable react/prop-types */

import React from 'react';
import { Platform, Text, View, ScrollView, Button } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import TimeList from '../screens/quickentry/TimeList';
import TimeEntry from '../screens/quickentry/TimeEntry';

import MileageEntry from '../screens/quickentry/MilageEntry';
import MileageList from '../screens/quickentry/MilageList';

import ExpenceEntry from '../screens/quickentry/ExpenceEntry';
import ExpenceList from '../screens/quickentry/ExpenceList';

import LoginForm from '../screens/LoginForm';
import AccountManager from '../screens/AccountManager';
import Welcome from '../screens/Welcome';

import { capitalizeFirstLetter } from '../helpers/string';
import { DrawerButton } from '../components/Header';

import { emailChanged, passwordChanged, loginUser, logoutUser, loading } from '../actions';

   const logoutPressed = () => {
        console.log('attempt login');
        this.props.logoutUser();
    }


const LeftDrawerButton = ({ navigate }) => {
  //if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
 // }

  //return null;
};

export const TimeStack = StackNavigator({
  TimeList: {
    screen: TimeList,
    navigationOptions: ({ navigation }) => ({
      title: 'Time',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  TimeEntry: {
    screen: TimeEntry,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const ExpenceStack = StackNavigator({
  ExpenceList: {
    screen: ExpenceList,
    navigationOptions: ({ navigation }) => ({
      title: 'Expence',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  ExpenceEntry: {
    screen: ExpenceEntry,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const MileageStack = StackNavigator({
  MilageList: {
    screen: MileageList,
    navigationOptions: ({ navigation }) => ({
      title: 'Mileage',
      headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  MilageEntry: {
    screen: MileageEntry,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});


export const AccountManagerStack = StackNavigator({
  AccountManager: {
    screen: AccountManager,
    navigationOptions: ({ navigation }) => ({
      title: 'Account Manager',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});


export const WelcomeStack = StackNavigator({
  WelcomeScreen: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      title: 'Welcome',
      headerLeft: <LeftDrawerButton {...navigation} />,
    }),
  },
});


export const LoginStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      title: 'Please log in',
   
    }),
  },
});



export const QuickEntryTabs = TabNavigator({
  ExpenceEntry: {
    screen: ExpenceStack,
    navigationOptions: {
      tabBarLabel: 'Expense',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
    },
  },
  TimeEntry: {
    screen: TimeStack,
    navigationOptions: {
      tabBarLabel: 'Time',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />,
    },
  },
  MileageEntry: {
    screen: MileageStack,
    navigationOptions: {
      tabBarLabel: 'Mileage',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />,
    },
  },
});

export const Drawer = DrawerNavigator({
  QuickEntry: {
    screen: QuickEntryTabs,
    navigationOptions: {
      drawerLabel: 'Quick entry',
    },
  },
  AccountManager: {
    screen: AccountManagerStack,
    navigationOptions: {
      drawerLabel: 'Account Manager',
    },
  }}
,{
  contentComponent: props => 
    <ScrollView>
      <Button title="sign out" onPress={() => logoutPressed()}></Button>
      <DrawerItems {...props} />
    </ScrollView>
  });



const routesconfig = {
  Login: {
    screen: LoginForm,
    title: 'Login'
  },
  Welcome: {screen: WelcomeStack}
}

export default routesconfig;