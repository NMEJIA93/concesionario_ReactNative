import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import VehicleList from '../components/VehicleList'
import { Button } from 'react-native-paper';
//import FirebaseState from '../context/firebase/firebaseState';
import CatalogueState from '../context/catalogue/catalogueState';

const Catalogue = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValueM, setSelectedValueM] = useState('');

  const vehicles = [
    {
      id: 1,
      urlImagen: 'https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/raptor/2023/colorizer/negro-agata/fco-f150-raptor-colorizer-negro-agata.jpg.dam.full.high.jpg/1684866214905.jpg',
      name: 'Ford F-150® Raptor',
      description: 'Asistente Anti-Colisión con detector de peatones, Sistema de Permanencia en el carril',
      price: 'Desde $520.990.000',


    },
    {
      id: 2,
      urlImagen: 'https://www.jeep.com/content/dam/cross-regional/stellantis/jeep/latam-rol/colombia/modelos/2023/wrangler/minis/Wrangler-2-puertas%20-%20FJDR%20FJDR.png.img.1440.png',
      name: 'Rubicon',
      description: 'Sistema 4X4 Rock-Trac Full Time con bajo + Desconexión electrónica de la barra estabilizadora + ejes dana de alta resistencia.',
      price: 'Desde $364.990.000'

    },
    {
      id: 3,
      urlImagen: 'https://www.jeep.com/content/dam/cross-regional/stellantis/jeep/latam-rol/chile/modelos/2023/new-renegade/Renegade_sport.png.img.1440.png',
      name: 'SPORT 1.3 ',
      description: 'Motor 1.3L T270 turbo con Torque 270 Nm, Control de tracción con bloqueo electrónico de diferencial',
      price: 'Desde $ $364.990.000'

    }];
  return (
  
      <CatalogueState>
        <View >
          <ScrollView>
            <Text style={styles.banner}>Catálogo de Vehículos</Text>
            <View >
              <Text style={styles.descrip}>Seleccionar Marca</Text>
              <Picker
                style={styles.catalogueContainer}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Seleccione" value="Seleccione" />
                <Picker.Item label="JEEP" value="JEEP" />
                <Picker.Item label="FORD" value="FORD" />
              </Picker>
            </View>
            <View >
              <Text style={styles.descrip}>Seleccionar Modelo</Text>
              <Picker style={styles.catalogueContainer}
                selectedValueM={selectedValueM}
                onValueChange={(itemValue, itemIndex) => setSelectedValueM(itemValue)}>
                <Picker.Item label="Seleccione" value="Seleccione" />
                <Picker.Item label="WRANGLER" value="opcion2" />
                <Picker.Item label="RENEGADE" value="opcion3" />
              </Picker>

            </View>
            <VehicleList vehicles={vehicles} />
          </ScrollView>
        </View>
      </CatalogueState>
 

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  banner: {
    fontSize: 30,
    textAlign: 'center',
    color: '#D5D5D5',
    backgroundColor: '#000000',
    padding: 10,
    fontFamily: 'sans-regular',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchLabel: {
    marginRight: 10,
  },
  searchSelect: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  descrip: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 5,
    fontFamily: 'sans-regular',
  },
  catalogueContainer: {
    backgroundColor: '#fff', // Fondo blanco
    padding: 10,
    borderRadius: 5,
    color: '#080707',
    marginBottom: 15,
  }
})


export default Catalogue