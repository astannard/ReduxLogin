import React, {Component} from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import { emailChanged, passwordChanged, loginUser, logoutUser, loading } from '../actions';
import { getCompanyList, } from '../actions/company';

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
            let company = (<CardSection><Text>No companies</Text></CardSection>) 
            if (this.props.companies.length > 0 ) {
                company = (<CardSection><Text>{this.props.companies[0].Name}</Text></CardSection>)
            }
            
            screen = (<Card>
                <Text>Logged In</Text>
                <Text>Key:{this.props.user.ApiKey}</Text>
       
                <CardSection>
                    <Button onPress={this.logUserOut.bind(this)}>Logout</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.loadCompanies.bind(this)}>Load Companies</Button>
                </CardSection>
                {company}
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