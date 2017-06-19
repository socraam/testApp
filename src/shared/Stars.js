import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = ({ number = 1, color = "yellow", style }) => {
    const estrellas = [];
    for(var i=0;i<number;i++)
    {
      estrellas.push(
        <Icon style={ styles.starStyle }
              key={i} name="star" size={15} color={color}/>
      );
    }
    return (
      <View style={[styles.containerStyle, style]}>
        { estrellas }
      </View>
    );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  }
};

export default Stars;
