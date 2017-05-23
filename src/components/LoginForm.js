import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Tile } from 'react-native-elements';
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
        return (
         <View>
             <Tile
                imageSrc={{require: ('../static/Directors.png')}}
                title="Welcome"
                icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
                contentContainerStyle={{height: 70}}
                >
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
            </Tile>

        </View>)
        

   
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
})(LoginForm);




