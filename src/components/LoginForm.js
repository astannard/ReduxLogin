import React, {Component} from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import { emailChanged, passwordChanged, loginUser, logoutUser, loading } from '../actions';

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

    logUserOut(){
         this.props.logoutUser();
    }

    render(){
        let screen = null;
        if(this.props.apploading){
            screen = <Spinner />
        }
        else if(this.props.user===undefined || this.props.user===null){
         screen = (<Card>
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

            </Card>)
        }else{
            screen = (<Card>
                <Text>Logged In</Text>
                <CardSection>
                    <Button onPress={this.logUserOut.bind(this)}>Logout</Button>
                </CardSection>
                </Card>)
        }
        return screen;
   
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        apploading: state.auth.apploading,
        user: state.auth.user
    }
}

export default connect(mapStateToProps,{
    emailChanged, 
    passwordChanged, 
    loginUser,
    logoutUser,
    loading
})(LoginForm);