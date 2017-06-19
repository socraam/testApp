import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = (props) => {
  return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 40 }}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="arrow-left" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.textStyle}>{ props.label }</Text>
      </View>
  );
};

const styles = {
  textStyle: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 10
  }
};

export default BackButton;
