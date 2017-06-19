import React, { Component } from 'react';
import { Router, Scene, View, Text, Actions } from 'react-native-router-flux';
import ListaHoteles from './components/ListaHoteles';
import HotelDetalle from './components/HotelDetalle';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from './shared/BackButton';


class RouterComponent extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ borderBottomWidth: 0 }}>
        <Scene key="hoteles" component={ListaHoteles} title="Elegí tu hotel" initial />
        <Scene key="hotelDetalle" component={HotelDetalle} navigationBarStyle={{ backgroundColor: 'transparent' }}
               hideNavBar={false}
        />
      </Router>
    );
  }
}

export default RouterComponent;
