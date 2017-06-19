import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 32,
    shadowRadius: 5,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    opacity: 100,
    backgroundColor: '#FFFFFF'
  }
};

export default Card;
