import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ComboItem = ({ onPress, item }) => {
  return (
    <TouchableWithoutFeedback onPress={ () => {
                                                onPress(item);
                                              }
                                      }>
      <View style={ styles.containerStyle }>
        <Icon style={ styles.iconStyle }
              name={item.icono} size={20} color="grey" />
        <Text>{ item.label }</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row'
  },
  iconStyle: {
    padding: 1
  }
};

export default ComboItem;
