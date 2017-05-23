import React, {Component} from 'react';
import { connect } from 'react-redux';

import {View, Text} from 'react-native';


import {  Drawer, Drawer2, WelcomeStack } from '../config/router';
import {  Spinner } from '../components/common';
import LoginForm from '../components/LoginForm';
import { loading } from '../actions';



class AppContainer extends Component{
    render(){

         let screen =  <Drawer />;
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

