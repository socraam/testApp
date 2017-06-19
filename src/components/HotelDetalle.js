import React, { Component } from 'react';
import { Text, Image, ScrollView, View, ListView, Animated, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import Stars from '../shared/Stars';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import TripAdvisor from '../shared/TripAdvisor';
import Combo from '../shared/Combo';
import { Actions } from 'react-native-router-flux';
import BackButton from '../shared/BackButton';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = 140;

class HotelDetalle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  componentWillMount() {
    console.log('detalle');
    console.log(this.props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.caracteristicas);


    Actions.refresh({
      renderBackButton: () =>
            <BackButton onPress={()=> { Actions.pop() }} label="Detalle" />
    });
  }

  renderRowCarac(item) {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center', margin: 15, paddingLeft: 30, paddingRight: 20  }}>
        <Icon name={item.icono} size={30} color="#FFFFFF" style={{ opacity: 1 }} />
        <Text style={{ fontFamily: 'Roboto Light',
                       fontSize: 10,
                       opacity: 1,
                       color: '#FFFFFF' }}
        >
          { item.label }
        </Text>
      </View>
    );
  }

  renderScrollView() {
    return (
      <View style={{ marginTop: HEADER_MAX_HEIGHT - 100}}>
        <Card>
          <View style={{ flex: 1, margin: 16, height: 100, alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Text style={styles.nombreHotel}>{ this.props.nombre }</Text>
            <Stars number={this.props.rate} color="#FDBA12" style={{ opacity: 1, paddingLeft: 5, width: 100, justifyContent: 'space-between' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5 }}>
              <Icon name="map-marker" size={20} color="#000000" style={{opacity: 0.54, flex: 1 }} />
              <Text style={styles.textoChico, { paddingLeft: 15, fontSize: 16, flex: 12 }}>{ this.props.direccion }</Text>
            </View>
          </View>
          <MapView
            style={{width: null, height: 140, flex: 1}}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={{
              latitude: this.props.ubicacion.latitud,
              longitude: this.props.ubicacion.longitud,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002,
            }}>
            <MapView.Marker
              coordinate={{ latitude: this.props.ubicacion.latitud, longitude: this.props.ubicacion.longitud }}
              pinColor="#CC0000"
              title="test" />
          </MapView>
        </Card>
        <Card>
          <View style={{ marginLeft: 16, marginRight: 16 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 48 }}>
              <Text style={styles.textoGrande}>
                Opiniones
              </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TripAdvisor number={ this.props.opiniones.promedio } />
                <Text style={ [styles.textoChico12, { paddingLeft: 5 }] }
                >
                  { this.props.opiniones.cantidad } opiniones
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, borderBottomWidth: 0.5, borderColor: '#9B9B9B',
                           opacity: 1, borderTopWidth: 0.5, height: 76,
                           alignItems: 'flex-start', justifyContent: 'center'
                        }}>
              <Text style={ [styles.textoChico, { opacity: 1, color: '#678D44' }] }>
                Clasificado en el puesto no. { this.props.opiniones.ranking } de { this.props.opiniones.totalRanking }
              </Text>
              <Text style={ styles.textoChico12 }>
                { this.props.opiniones.categoria }
              </Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
              <Image source={{uri: this.props.opiniones.opiniones[0].urlPerfil }}
                     style={{ height: 50, width: 50, borderRadius: 100 }} />
              <View style={{ flexDirection: 'column', marginLeft: 15, marginRight: 15 }}>
                <Text style={ [styles.textoChico, { opacity: 1, color: '#335692' }] }>
                  { this.props.opiniones.opiniones[0].resumen }
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TripAdvisor number={ this.props.opiniones.opiniones[0].rate } />
                  <Text style={ [styles.textoChico12, { paddingLeft: 5 }] }>
                    { this.props.opiniones.opiniones[0].fecha }
                  </Text>
                </View>
                <Text style={ [styles.textoChico12, { paddingRight: 20 }] }
                      numberOfLines={1} ellipsizeMode='tail'>
                  { this.props.opiniones.opiniones[0].frase }
                </Text>
              </View>
            </View>
          </View>
        </Card>
        <ListView
          horizontal={true}
          style={{ flex: 1, backgroundColor: '#335692', opacity: 1, marginTop: 16 }}
          dataSource={this.dataSource}
          renderRow={this.renderRowCarac}
        />
        <Card>
          <View style={{ marginLeft: 16, marginRight: 16 }}>
            <View style={{ flex: 3, flexDirection: 'row', height: 48, alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={ [styles.textoGrande, { flex: 1, opacity: 1 }] }>
                Habitaciones
              </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Icon name="users" size={24} color="#000000" style={{ opacity: 0.54 }} />
                <Text style={ [styles.textoChico, { opacity: 1, color: '#335692', paddingLeft: 10 }] }>
                  6
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Icon name="bed" size={24} color="#000000" style={{ opacity: 0.54 }} />
                <Text style={ [styles.textoChico, { opacity: 1, color: '#335692', paddingLeft: 10 }] }>
                  2
                </Text>
              </View>
            </View>
            <View style={{ height: 128, justifyContent: 'center', borderColor: '#9B9B9B',
                           opacity: 1, borderTopWidth: 0.5, flex: 1 }}>
              <Text style={ [styles.textoChico, { opacity: 1, color: '#335692'}] }>
                Habitación Standard
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={ styles.textoChico12 }>
                  2 personas  |  1 cama doble
                </Text>
              </View>
                <Text style={ [styles.textoChico, { opacity: 1, color: '#335692' }] }>
                  Habitación Standard
                </Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={ styles.textoChico12 }>
                  4 personas  |  1 cama doble  |  2 camas simples
                </Text>
              </View>
            </View>
            <View style={{ height: 48, justifyContent: 'center' }}>
              <Combo items={ [{ "icono":"coffee", "label":"Desayuno" }, { "icono":"bed", "label":"Sólo Habitación" }] }
                     value={{ "icono":"bed", "label":"Sólo Habitación" }} onSelect={ () => {}}
              />
            </View>
            <View style={{ height: 48, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between',
                           borderColor: '#9B9B9B', opacity: 1, borderBottomWidth: 0.5
                        }}>
              <Text style={ styles.textoChico12 }>
                precio por noche por habitación
              </Text>
              <Text style={{ fontFamily: 'Roboto Medium',
                             fontSize: 20,
                             opacity: 0.87,
                             color: '#000000' }}
              >
                { this.props.precio }
              </Text>
            </View>
            <View style={{ height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Text style={{ fontFamily: 'Roboto Medium',
                             fontSize: 14,
                             opacity: 1,
                             color: '#DF6800' }}
              >
                CAMBIAR
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ marginLeft: 16, marginRight: 16 }}>
            <View style={{ height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',
                           borderBottomWidth: 0.5, borderColor: '#9B9B9B', opacity: 1}}>
              <Text style={ styles.textoGrande }>
                Descripción
              </Text>
            </View>
            <View style={{ height: 72, flexDirection: 'row', alignItems: 'center', borderColor: '#9B9B9B', borderBottomWidth: 0.5, opacity: 1, borderStyle: 'dashed' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Icon name="clock-o" size={24} color="#000000" style={{ opacity: 0.54 }} />
              </View>
              <View style={{ flex: 6, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.textoChico}>
                  Entrada: A partir de las { this.props.checkIn }
                </Text>
                <Text style={styles.textoChico}>
                  Salida: Hasta las { this.props.checkOut }
                </Text>
              </View>
            </View>
            <View style={{ height: 104, flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={ [ styles.textoChico, { opacity: 1, color: '#335692', paddingBottom: 5 }] }>
                Ubicación del establecimiento
              </Text>
              <Text style={styles.textoChico}>
                En Miami Beach (Mid Beach), Hilton Cabana
              </Text>
              <Text style={styles.textoChico}>
                Miami Beach te permite llegar cómodamente a...
              </Text>
            </View>
          </View>
        </Card>
        <Card>
            <View style={{ marginLeft: 16, marginRight: 16, height: 88, flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={ styles.textoGrande }>Cancelación/Prepago</Text>
              <Text style={ styles.textoChico }>Las condiciones de cancelación y de pago por adelantado pueden variar según el tipo de...</Text>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16, height: 88, flexDirection: 'column', justifyContent: 'center', borderColor: '#9B9B9B', borderTopWidth: 0.5, opacity: 1 }}>
              <Text style={ styles.textoGrande }>Servicios opcionales de habitación</Text>
              <Text style={ styles.textoChico }>Los siguientes cargos y depósitos se pagan directamente en el hotel al recibir el servicio...</Text>
            </View>
            <View style={{ marginLeft: 16, marginRight: 16, height: 72, flexDirection: 'column', justifyContent: 'center', borderColor: '#9B9B9B', borderTopWidth: 0.5, opacity: 1 }}>
              <Text style={ styles.textoGrande }>Servicios incluídos en la reserva</Text>
              <Text style={ styles.textoChico }>Los siguientes cargos se pagan en el hotel</Text>
            </View>
        </Card>
      </View>
    );
  }

  render() {
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE-5],
      extrapolate: 'clamp'
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.7],
      extrapolate: 'clamp'
    });

    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp'
    });


    return (
      <View style={{ backgroundColor: '#EEEEEE' }}>
        <Animated.View style={ [styles.header, { transform: [{ translateY: headerTranslate }] }] }>
          <Animated.Image style={ [styles.backgroundImage, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }] }
                          source={{ uri: this.props.imagen }}
          />
        </Animated.View>
        <Animated.ScrollView style={{ backgroundColor: 'transparent', marginTop: HEADER_MIN_HEIGHT }}
                             scrollEventThrottle={1}
                             onScroll={ Animated.event(
                                          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                                           { useNativeDriver: true })
                                      }
        >
            { this.renderScrollView() }
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = {
  nombreHotel: {
    fontSize: 20,
    fontFamily: 'Roboto Medium',
    fontWeight: 'bold',
    color: '#000000',
    opacity: 0.87
  },
  direccionStyle: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    opacity: 0.54,
    color: '#000000',
    paddingLeft: 10,
    paddingRight: 40
  },
  textoChico: {
     fontFamily: 'Roboto Regular',
     color: '#000000',
     fontSize: 14,
     opacity: 0.54,
     lineHeight: 20
  },
  textoGrande: {
     fontFamily: 'Roboto Regular',
     color: '#000000',
     fontSize: 16,
     opacity: 0.87,
     lineHeight: 16
  },
  textoChico12: {
    fontFamily: 'Roboto Regular',
    fontSize: 12,
    opacity: 0.54,
    lineHeight: 14,
    color: '#000000'
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default HotelDetalle;
