import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import VehicleList from '../components/VehicleList'

const Catalogue = () => {
    const [selectedValue, setSelectedValue] = useState('');
    
    const vehicles = [
        {
            id: 1,
            urlImagen: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg',
            description: 'Camila debes estudiar',
            price: 2000

        },
        {
            id: 2,
            urlImagen: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg',
            description: 'JEEP2',
            price: 2000

        },
        ,
        {
            id: 3,
            urlImagen: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg',
            description: 'JEEP2',
            price: 2000

        },
        ,
        {
            id: 4,
            urlImagen: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg',
            description: 'JEEP2',
            price: 2000

        },
        ,
        {
            id: 5,
            urlImagen: 'https://loscoches.com/wp-content/uploads/2022/06/1-Jeep-Commander-Los-Coches.jpg',
            description: 'JEEP2',
            price: 2000

        }];
  return (
    <View>
    <Text style={styles.banner}>Catálogo de Vehículos</Text>  
    <View >
      <Text style={styles.descrip}>Seleccionar Marca</Text>
    <Picker 
      style={styles.catalogueContainer}
      selectedValue={selectedValue} 
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Mazda" value="Mazda" />
      <Picker.Item label="Opción 2" value="opcion2" />
      <Picker.Item label="Opción 3" value="opcion3" />
  </Picker>
  </View>
  <View >
      <Text style={styles.descrip}>Seleccionar Modelo</Text>
    <Picker style={styles.catalogueContainer}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Mazda" value="Mazda" />
      <Picker.Item label="Opción 2" value="opcion2" />
      <Picker.Item label="Opción 3" value="opcion3" />
  </Picker>
  </View>
    <VehicleList vehicles={vehicles} />
  </View>
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
      descrip:{
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
        marginBottom: 15,}
})


export default Catalogue