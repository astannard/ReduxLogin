import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from '../components/common';
import { emailChanged, passwordChanged, loginUser, logoutUser, loading } from '../actions';
import { getCompanyList, } from '../actions/company';
import { Tabs, Drawer } from '../config/router';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    loginUserPressed(){
        console.log('attempt login');
        const {email,  password} = this.props;
        this.props.loginUser({email, password});
    }

    loadCompanies(){

       const {Username,ApiKey} = this.props.user;
               


        console.log('attempt getCompanyList');

         this.props.getCompanyList({username: Username,apiKey: ApiKey});
    }

    logUserOut(){
         this.props.logoutUser();
    }

    render(){
        let screen = (<Spinner />);
        if(!this.props.apploading){
            screen =  (
         <View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="whats@your.email" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password" 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                         value={this.props.password}/>

                </CardSection>
                <CardSection>
                    <Button onPress={this.loginUserPressed.bind(this)}>Login</Button>
                </CardSection>

            </Card>
                </View>

        </View>)
        }
        return screen;
   
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        apploading: state.auth.apploading,
        user: state.auth.user,
        error: state.auth.error,
        companies: state.companies.companies,
        companyerror: state.companies.error
    }
}

export default connect(mapStateToProps,{
    emailChanged, 
    passwordChanged, 
    loginUser,
    logoutUser,
    loading,
    getCompanyList,
})(LoginForm);


const styles = {
  textWelcomeStyle: {
    color: '#eee',
    shadowColor: '#000',
    marginTop: 60
  }
};