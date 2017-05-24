import React, {Component} from 'react';
import { connect } from 'react-redux';

import {View, Text} from 'react-native';

import  router  from '../config/router'
import {  Drawer,  WelcomeStack } from '../config/router';
import {  Spinner } from '../components/common';
import LoginForm from '../components/LoginForm';
import { loading } from '../actions';
import {StackNavigator, addNavigationHelpers, NavigationActions} from 'react-navigation';

const LeftDrawerButton = ({ navigate }) => {
    return <DrawerButton onPress={() => system.log('menu me')} />;
};


const Navigation = StackNavigator(
    router,
    {
        headerMode: 'screen', 
        initialRouteName: 'Login',
        headerLeft: <LeftDrawerButton  />
    }
);

const INITIAL_STATE = Navigation.router.getStateForAction(
    Navigation.router.getActionForPathAndParams('Login')
);





const defaultGetStateForAction = Navigation.router.getStateForAction;

 Navigation.router.getStateForAction = (action, state) => {

  return defaultGetStateForAction(action, state);
};


class AppContainer extends Component{
    render(){

          let screen =  (
                          <Navigation
                                navigation={addNavigationHelpers({
                                dispatch: this.props.dispatch,
                                state: this.props.nav
                            })}
                            />
          );
           if(this.props.apploading){
               screen = <Spinner />
           }
           else if(this.props.user === undefined) {
               screen = (<LoginForm />)
           }
          return screen;
   
    }
}
const mapStateToProps = state => {
    return {
        apploading: state.auth.apploading,
        user: state.auth.user,
        error: state.auth.error,
    }
}

export default connect(mapStateToProps,{
    loading,
})(AppContainer);

