import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    width:300,
    height:400
  }
};

export { Card };
