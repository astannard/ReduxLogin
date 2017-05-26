import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './screens/LoginForm';
import AccountManager from './screens/AccountManager';
import ExpenseList from './screens/quickentry/ExpenseList';
import ExpenseEntry from './screens/quickentry/ExpenseEntry';

const RouterComponent = () => {

    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene 
                    key="login" 
                    component={LoginForm} 
                    title="Please login" 
                    initial
                />
            </Scene>
            <Scene key="main">

                <Scene 
                    key="expenses" 
                    component={ExpenseList} 
                    title="Expenses" 
                    rightTitle="Add Expense"
                    onRight={()=>{
                        Actions.createexpense()
                    }}
                />

                <Scene
                    key="createexpense"
                    component={ExpenseEntry}
                    title="Create Expense"
                    />

                <Scene 
                    key="accountmanager" 
                    component={AccountManager} 
                    title="Your account manager" 
                />

            </Scene>
        
        </Router>
    );


};

export default RouterComponent;