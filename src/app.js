import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';

import reducers from './reducers';

import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{
    componentWillMount() {
          var config = {
            apiKey: "AIzaSyCuMarTYycsSnXg3hIpyBsUrIXhC8y-OpQ",
            authDomain: "goal-coach-54faf.firebaseapp.com",
            databaseURL: "https://goal-coach-54faf.firebaseio.com",
            projectId: "goal-coach-54faf",
            storageBucket: "goal-coach-54faf.appspot.com",
            messagingSenderId: "725947110235"
        };

        firebase.initializeApp(config);
    }

    render(){
        
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <View>
                    <Header headerText="Tech Stack" />
                    <LoginForm />
                </View>
            </Provider >
        );
    }
}

export default App;