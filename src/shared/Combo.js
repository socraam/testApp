import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ComboItem from './ComboItem';

class Combo extends Component {
  state = { abierto: false, seleccionado: this.props.value };

  onPressCombo(item) {
    if(this.state.abierto) {
      this.setState({ ...this.state, abierto: false, seleccionado: item },
                    () => this.props.onSelect(this.state.seleccionado)
                   );
    }
    else {
      this.setState({ ...this.state, abierto: true },
                    () => this.props.onSelect(this.state.seleccionado)
                   );
    }
  }

  renderIcono(item) {
    if(item.label === this.state.seleccionado.label)
    {
      console.log('RENDER ICON');
      return (
        <Icon style={ styles.iconStyle }
              name="check-circle" size={20} color="orange" />
      );
    }
  }

  renderItems() {
    if(this.state.abierto)
    {
      return this.props.items.map(item =>
        <View style={styles.rowContainer} key={ item.label }>
          <ComboItem onPress={ this.onPressCombo.bind(this) } item={ item } />
          { this.renderIcono(item) }
        </View>
      );
    }
    else {
      return (
        <View style={styles.rowContainer} key={ this.state.seleccionado.label }>
          <ComboItem onPress={ this.onPressCombo.bind(this) } item={ this.state.seleccionado } />
          <Icon style={ styles.iconStyle }
                name="angle-down" size={20} color="orange" />
        </View>
      );
    }
  };


  render() {
    return (
      <View style={ styles.containerStyle }>
        { this.renderItems() }
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    width: null,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    borderStyle: 'dashed',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    padding: 1
  }
};

export default Combo;
