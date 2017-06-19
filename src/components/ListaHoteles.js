import React, { Component } from 'react';
import { ListView, Text, View, ScrollView } from 'react-native';
import Hotel from './Hotel';
import datos from '../hoteles.json';
import Input from '../shared/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListaHoteles extends Component {
  state = { busqueda: ''};

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(datos);
  }

  renderRow(item) {
    return <Hotel hotel={item} />
  }

  render() {
    return (
      <View style={{ paddingTop: 60 , flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#CC3300',
                       paddingLeft: 16, paddingRight: 16, paddingTop: 5, paddingBottom: 5, elevation: 5 }}>
          <View style={{ flex: 4, flexDirection: 'column' }}>
            <Text style={ styles.texto }>Miami, Estados Unidos</Text>
            <Text style={ styles.texto }>13 mar. 2016 - 12 noches</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',
                         borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#FFFFFF'}}>
            <Icon name="users" size={24} color="#FFFFFF" />
            <Text style={ [styles.texto, { paddingLeft: 10 }] }>
              6
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name="bed" size={24} color="#FFFFFF" />
            <Text style={ [styles.texto, { paddingLeft: 10 }] }>
              2
            </Text>
          </View>
        </View>
        <View style={{ padding: 10, backgroundColor: '#D0D3D4' }}>
          <Input value={ this.state.busqueda } placeholder="Escribí el hotel que buscas"
                 onChangeText={ texto => this.setState({ busqueda: texto }) } />
        </View>
        <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
          <ListView dataSource={this.dataSource}
                    renderRow={this.renderRow}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  texto: {
    color: '#FFFFFF',
    fontFamily: 'Roboto Medium',
    opacity: 0.87
  }
};

export default ListaHoteles;
