import React, { useContext, useState, useEffect } from 'react';
import TestDriveState from '../context/testDrive/testDriveState';
import { ScrollView } from 'react-native-gesture-handler';
import TestCar from './TestCar';

const CatalogueTest = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueM, setSelectedValueM] = useState('');

    return (
        <TestDriveState>
            <View>
                <ScrollView>
                    <Text style={styles.banner}>Catálogo de Deiby</Text>
                    <View >
                        <Text style={styles.descrip}>Seleccionar Marca deiby</Text>
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
                        <Text style={styles.descrip}>Seleccionar Modelo deiby</Text>
                        <Picker style={styles.catalogueContainer}
                            selectedValueM={selectedValueM}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueM(itemValue)}>
                            <Picker.Item label="Seleccione" value="Seleccione" />
                            <Picker.Item label="WRANGLER" value="opcion2" />
                            <Picker.Item label="RENEGADE" value="opcion3" />
                        </Picker>

                    </View>
                    <TestCar/>
                </ScrollView>
            </View>
        </TestDriveState>
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

  export default CatalogueTest