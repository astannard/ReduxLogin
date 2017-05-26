import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Navigator} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import  getStore  from './stores/'
import reducers from './reducers';
import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS, LOADING, LOADED} from './actions/types';
import Router from './router';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  }
})

class App extends Component{
    

    render(){
        const store = getStore();
        return(
            <Image source={require('./static/bg.png')} style={styles.container}>
                <Provider store={store}>
                    <Router />
                </Provider>
            </Image>
        )
    }

}

export default App;




