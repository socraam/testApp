import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TripAdvisor = ({ number = 1 }) => {
    const rate = [];
    for(var i=0;i<5;i++)
    {
      if(i<number)
      {
        rate.push(
          <Icon style={ styles.circleStyle }
                key={i} name="circle" size={15} color="green"/>
        );
      }
      else
      {
        rate.push(
          <Icon style={ styles.circleStyle }
                key={i} name="circle-o" size={15} color="green"/>
        );
      }
    }

    return (
      <View style={ styles.containerStyle }>
        <Icon style={{ paddingRight: 5 }}
              name="tripadvisor" size={15} color="green" />
        { rate }
      </View>
    );
};

const styles = {
  containerStyle: {
    flexDirection: 'row'
  },
  circleStyle: {
    opacity: 1,
    justifyContent: 'flex-start'
  }
};

export default TripAdvisor;
