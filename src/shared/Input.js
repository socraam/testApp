import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ value, onChangeText, placeholder }) => {
  const { inputStyle, iconStyle, containerStyle } = styles;

    return (
      <View style={ containerStyle }>
        <Icon name="search" size={20} color="#000000" style={ iconStyle } />
        <TextInput placeholder={placeholder}
                   style={ inputStyle }
                   onChangeText={ onChangeText }
                   value={ value }
                   underlineColorAndroid='transparent'
        />
        <Icon name="microphone" size={20} color="#000000" style={ iconStyle }/>
      </View>
    );
};

const styles = {
  containerStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 32,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: null
  },
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    opacity: 0.54,
    lineHeight: 23
  },
  iconStyle: {
    opacity: 0.54,
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default Input;
