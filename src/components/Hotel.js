import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import Card from '../shared/Card';
import CardSection from '../shared/CardSection';
import Stars from '../shared/Stars';
import { Actions } from 'react-native-router-flux';
import Combo from '../shared/Combo';
import Icon from 'react-native-vector-icons/FontAwesome';

class Hotel extends Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={ () => Actions.hotelDetalle(this.props.hotel) }>
        <View>
          <Card>
            <Image style={styles.imageStyle}
                   source={{uri: this.props.hotel.imagen}} />
            <Text style={styles.nombreStyle}>{ this.props.hotel.nombre }</Text>
            <View style={{ flexDirection: 'row', margin: 10 }}>
              <View style={{ flex: 2, flexDirection: 'column' }}>
                <Stars number={ this.props.hotel.rate } color="#FDBA12" style={{ width: 100, paddingTop: 5 }} />
                <View style={{ flexDirection: 'row', flex: 1, paddingTop: 10 }}>
                  <Icon style={{ paddingLeft: 3 }}
                        name={this.props.hotel.soloHab.icono} size={20} color="grey" />
                  <Text style={{ paddingLeft: 10 }}>{ this.props.hotel.soloHab.label }</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'column',  borderLeftWidth: 0.5, borderColor: '#9B9B9B', paddingLeft: 10 }}>
                <Text style={styles.precioStyle}>precio por noche</Text>
                <Text style={styles.importeStyle}>{ this.props.hotel.precio }</Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowRadius: 5
  },
  nombreStyle: {
    fontSize: 20,
    fontFamily: 'Roboto Medium',
    fontWeight: 'bold',
    color: '#000000',
    opacity: 0.87,
    paddingTop: 5,
    paddingLeft: 10
  },
  precioStyle: {
    fontFamily: 'Roboto Medium',
    color: '#000000',
    opacity: 0.54
  },
  importeStyle: {
    fontFamily: 'Roboto Medium',
    fontSize: 22,
    color: '#000000',
    opacity: 0.87,
    paddingTop: 3
  }
};

export default Hotel;
