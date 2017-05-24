import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Navigator} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {StackNavigator, addNavigationHelpers, NavigationActions} from 'react-navigation';

import  router  from './config/router'
import  getStore  from './stores/'
import reducers from './reducers';
import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS, LOADING, LOADED} from './actions/types';

//import AppContainer from './containers/AppContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  }
})


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





const navReducer = (state = INITIAL_STATE, action) => {

   
        let navState = {};

        switch(action.type){
        
         case LOGIN_USER_SUCCESS:
            let navAction =  Navigation.router.getActionForPathAndParams('LoggedIn/QuickEntry/ExpenceEntry');
            console.log('navAction',navAction);
            
            navState = Navigation.router.getStateForAction(
                navAction
                ,state
            ); 

             console.log('navreducer: logged in', action.payload );
             return { ...state, ...INITIAL_STATE, ...navState };   

        case "Navigation/NAVIGATE":
            console.log('navAction',action);
             navState = Navigation.router.getStateForAction(
                action
                ,state
            ); 
            return { ...state, ...INITIAL_STATE, ...navState };   
        case "Navigation/BACK":
            console.log('navAction',action);
            navState = Navigation.router.getStateForAction(
                action
                ,state
            ); 
             return { ...state, ...INITIAL_STATE, ...navState };   
         default:
             return state;
     }
}

const defaultGetStateForAction = Navigation.router.getStateForAction;

 Navigation.router.getStateForAction = (action, state) => {

  return defaultGetStateForAction(action, state);
};


class App extends Component{

    render(){
        return(

            
            <Navigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
                />
        );
    }
}

const store = getStore(navReducer);

const AppIndex = connect(state => ({nav: state.nav}))(App)

export default Index = () => {
    return(
          <Image source={require('./static/bg.png')} style={styles.container}>
            <Provider store={store}>
                <AppIndex />
            </Provider>
          </Image>
    )
};


