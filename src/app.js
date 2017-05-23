import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Navigator} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import  router  from './config/router'
import  getStore  from './stores/'
import reducers from './reducers';

//import AppContainer from './containers/AppContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  }
})


const Navigation = StackNavigator(router,{headerMode: 'screen'});

const navReducer = (state, action) => {
    const newState = Navigation.router.getStateForAction(action,state);
    return newState || state; 
}

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

        /*return(
            <Image source={require('./static/bg.png')} style={styles.container}>
                <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                        <AppContainer />            
                </Provider >
            </Image>
        );*/
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


