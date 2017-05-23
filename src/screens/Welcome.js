import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Tile } from 'react-native-elements';
class Welcome extends Component {

    render(){
        return(

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Welcome</Text>
            </View>
        );
    }
}

export default Welcome;