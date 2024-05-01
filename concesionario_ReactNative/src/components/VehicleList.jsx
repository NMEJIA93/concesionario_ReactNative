import React, { useContext, useEffect } from 'react'
import { ScrollView } from 'react-native';
import Vehicle from './Vehicle';
import CatalogueContext from '../context/catalogue/catalogueContext'; 
import { Text } from 'react-native-paper';


const VehicleList = (/* { vehicles } */) => {

  const { catalogue, getListCars } = useContext(CatalogueContext)

  useEffect(() => {
    return () => {
      getListCars()
    };
  }, [])
  const handleCotizar = () => {
    // Lógica para manejar la acción de cotizar
    console.log('Botón Cotizar presionado');
  };
  return (
    <ScrollView>
      {catalogue.map((vehicle) => {
        const { name,urlImagen,description, price} = vehicle
        console.log('entro ')
        return (
          <Vehicle
            key={vehicle.id}
            urlImagen={urlImagen}
            name={name}
            description={description}
            price={price}
            onCotizar={handleCotizar} // Pasar la función de manejo como prop
          />
        )
      })}
      {/*         {vehicles.map((vehicle) => (
          <Vehicle
          key={vehicle.id}
          urlImagen={vehicle.urlImagen}
          name={vehicle.name}
          description={vehicle.description}
          price={vehicle.price}
          onCotizar={handleCotizar} // Pasar la función de manejo como prop
          />
        ))} */}
    </ScrollView>
  );
}

export default VehicleList